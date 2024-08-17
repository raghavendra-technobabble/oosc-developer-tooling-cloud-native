#!/bin/bash
echo "process_B (PID: $$) is starting."
while true; do
  echo "process_B checking for other processes..."
  ps -e | grep -E "process_A|process_C|process_D" || echo "No other processes found."
  sleep 5
done