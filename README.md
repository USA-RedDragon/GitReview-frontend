# Git Review Client

[![CircleCI](https://circleci.com/gh/USA-RedDragon/GitReview-frontend/tree/master.svg?style=svg)](https://circleci.com/gh/USA-RedDragon/GitReview-frontend/tree/master) [![codecov](https://codecov.io/gh/USA-RedDragon/gitreview-frontend/branch/master/graph/badge.svg)](https://codecov.io/gh/USA-RedDragon/gitreview-frontend) [![Client](https://images.microbadger.com/badges/image/jamcswain/gitreview-client.svg)](https://microbadger.com/images/jamcswain/gitreview-client "Get your own image badge on microbadger.com")

## Deploying

The Docker images for the current master branch are found on [Docker Hub](https://hub.docker.com/u/jamcswain) under `gitreview-client`. Versioning will be implemented once we reach stable 1.0.

The below documentation will go through the information you need.

As far as best practices, and how to deploy containers, a Google search is your best friend.

## Environment Variables

Note: Client environment variables must be set at build time

| Environment Variable |            Details            | Example |
| -------------------- | ----------------------------- | ------- |
| BASE_URL             | The base URL for the frontend | /       |
