#!/bin/bash

exec docker run \
  --name elastic \
  --rm \
  -e "node.attr.testattr=test" \
  -e "path.repo=/tmp" \
  -e "repositories.url.allowed_urls=http://snapshot.*" \
  -e "discovery.type=single-node" \
  -p 9200:9200 \
  docker.elastic.co/elasticsearch/elasticsearch:7.0.0-beta1
  # docker.elastic.co/elasticsearch/elasticsearch:6.6.0
