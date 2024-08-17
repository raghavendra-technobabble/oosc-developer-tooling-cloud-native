#!/bin/bash
echo "process_C (PID: $$) is starting."
while true; do
  echo "process_C checking for other processes..."
  ps -e | grep -E "process_A|process_B|process_D" || echo "No other processes found."
  sleep 5
done
