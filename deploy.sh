#!/bin/bash
deploySourceStrapi () {
    ssh debian@vps "rm -rf sunshine-content/src/"
    scp -r types  debian@vps:sunshine-content/
    scp -r src  debian@vps:sunshine-content/
    ssh debian@vps "
        cd sunshine-content
        yarn build
        pm2 restart strapi
    "   
}
deployDataStrapi () {
    # archive export
    mv sunshine-content-export.tar.gz "sunshine-content-export—$(date +"%Y%m%d_%I%M%S").tar.gz"
    npm run strapi export -- --no-encrypt --file sunshine-content-export
    scp sunshine-content-export.tar.gz debian@vps:sunshine-content
    ssh debian@vps "
    cd sunshine-content
    yarn strapi import --force -f sunshine-content-export.tar.gz
    "
}
deploySourceStrapi
deployDataStrapi

