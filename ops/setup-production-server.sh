#!/usr/bin/env bash
# One-time, idempotent setup of sonitransfer.com on the web server.
# Run as mbah from a checkout of this repository: sudo bash ops/setup-production-server.sh
# It backs up the current static site and Apache config, installs the
# production service, and stages (but does not enable) the new vhosts.
# Pass --switch to also point Apache at the new service.
set -Eeuo pipefail

repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
stamp="$(date +%Y%m%d-%H%M%S)"
backup_dir="/home/mbah/deployments/sonitransfer-production/backups/legacy-static-$stamp"

mkdir -p "$backup_dir"
tar -C /var/www -czf "$backup_dir/soni-transfer-html.tar.gz" soni-transfer-html
cp -a /etc/apache2/sites-available/sonitransfer.com.conf /etc/apache2/sites-available/sonitransfer.com-le-ssl.conf "$backup_dir/"
chown -R mbah:mbah "$backup_dir"
echo "Backed up the current production site to $backup_dir"

install -d -o madani-webuser -g webdev -m 2775 /var/www/sonitransfer-com
install -d -o mbah -g mbah -m 0775 /home/mbah/deployments/sonitransfer-production/releases

install -o root -g root -m 0644 "$repo_dir/ops/systemd/soni-production.service" /etc/systemd/system/soni-production.service
visudo -cf "$repo_dir/ops/sudoers.d/soni-production-deploy"
install -o root -g root -m 0440 "$repo_dir/ops/sudoers.d/soni-production-deploy" /etc/sudoers.d/soni-production-deploy
systemctl daemon-reload
systemctl enable soni-production.service

if [[ "${1:-}" == "--switch" ]]; then
  install -o root -g root -m 0644 "$repo_dir/ops/apache/sonitransfer.com.conf" /etc/apache2/sites-available/sonitransfer.com.conf
  install -o root -g root -m 0644 "$repo_dir/ops/apache/sonitransfer.com-le-ssl.conf" /etc/apache2/sites-available/sonitransfer.com-le-ssl.conf
  if ! apache2ctl configtest; then
    cp -a "$backup_dir/sonitransfer.com.conf" "$backup_dir/sonitransfer.com-le-ssl.conf" /etc/apache2/sites-available/
    echo "Apache config test failed; the previous vhosts were restored." >&2
    exit 1
  fi
  systemctl reload apache2
  echo "sonitransfer.com now proxies to soni-production.service on port 3003."
  echo "Roll back: sudo cp $backup_dir/sonitransfer.com*.conf /etc/apache2/sites-available/ && sudo systemctl reload apache2"
fi
