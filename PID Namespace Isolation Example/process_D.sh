#!/bin/bash
echo "process_D (PID: $$) is starting."
while true; do
  echo "process_D checking for other processes..."
  ps -e | grep -E "process_A|process_B|process_C" || echo "No other processes found."
  sleep 5
done
