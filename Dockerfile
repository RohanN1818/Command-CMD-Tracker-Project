# Step 1: Build application
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY commandtracker .
RUN mvn clean package -DskipTests

# Step 2: Run application
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]