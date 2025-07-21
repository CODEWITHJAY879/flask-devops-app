# Use Python image
FROM python:3.9

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install Flask
RUN pip install flask

# Expose port
EXPOSE 5000

# Run the app
CMD ["python", "app.py"]

