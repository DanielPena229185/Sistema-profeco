# Step 1: Choose a base image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Step 2: Copy your .NET application files into the container
WORKDIR /app
COPY . .

# Step 3: Build the application
RUN dotnet publish -c Release -o out

# Step 4: Define the runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/out .

# Step 5: Expose the port your application listens on
EXPOSE 7049

# Step 6: Define the command to run your application
CMD ["dotnet", "Market.dll"]
