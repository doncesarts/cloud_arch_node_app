
#!/bin/bash

image_name="ca674_cloud_arch_test_app"

docker login --username=$DOCKER_USER --password=$DOCKER_PASS $DOCKER_HOST &&
docker build -t $image_name . &&
docker push danielrejniak/$image_name
