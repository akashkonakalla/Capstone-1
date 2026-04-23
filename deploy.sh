#!/bin/bash

APP_NAME="capstone-prototype"
CONTAINER_NAME="capstone"
PORT=3000

echo "🔍 Running tests..."
npm test
TEST_RESULT=$?

if [ $TEST_RESULT -eq 0 ]; then
    echo "✅ Tests passed. Building Docker image..."
    docker build -t $APP_NAME .

    echo "🛑 Stopping existing container (if any)..."
    docker stop $CONTAINER_NAME 2>/dev/null
    docker rm $CONTAINER_NAME 2>/dev/null

    echo "🚀 Running new container..."
    docker run -d -p $PORT:3000 --name $CONTAINER_NAME $APP_NAME

    echo "✅ Deployment complete. App running at http://localhost:$PORT"
else
    echo "❌ Tests failed. Deployment aborted."
    exit 1
fi
