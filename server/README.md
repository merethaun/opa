# Development Server 

## create php mysql nginx docker system (lemp stack)

### Introduction

LEMP means:
* L is for Linux;
* E is for Nginx;
* M is for MySQL;
* P is for PHP.

Checkout this very good [tutorial](https://tech.osteel.me/posts/docker-for-local-web-development-part-1-a-basic-lemp-stack)


### docker-compose


Taken from https://docs.docker.com/compose/install/

1. Install docker composer

        sudo curl -L "https://github.com/docker/compose/releases/download/1.28.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

2. Set access rights

        sudo chmod +x /usr/local/bin/docker-compose

3. Test installation

        $ docker-compose --version
        docker-compose version 1.28.2, build 67630359

### run composer

        $ cd $PRJ_ROOT/server
        $ sudo docker-compose up -d

All docker container are created and started. To checkk you can call

        $ sudo docker-compose ps
               Name                      Command               State          Ports        
        -----------------------------------------------------------------------------------
        server_mysql_1        docker-entrypoint.sh mysqld      Up      3306/tcp, 33060/tcp 
        server_nginx_1        nginx -g daemon off;             Up      0.0.0.0:80->80/tcp  
        server_php_1          docker-php-entrypoint php-fpm    Up      9000/tcp            
        server_phpmyadmin_1   /docker-entrypoint.sh apac ...   Up      0.0.0.0:8080->80/tcp