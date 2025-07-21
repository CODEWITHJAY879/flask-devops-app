# Base image
FROM python:3.9

# Working directory inside container
WORKDIR /app

# Copy files from local to container
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY app.py app.py

# Expose port
EXPOSE 5000

# Command to run app
CMD ["python", "app.py"]

