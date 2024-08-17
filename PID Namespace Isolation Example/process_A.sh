#!/bin/bash
echo "process_A (PID: $$) is starting."
while true; do
  echo "process_A checking for other processes..."
  ps -e | grep -E "process_B|process_C|process_D" || echo "No other processes found."
  sleep 5
done