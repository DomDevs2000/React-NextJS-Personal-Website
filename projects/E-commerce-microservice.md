---
title: 'E-Commerce Microservice'
date: 'July 1, 2023'
description: 'Fully integrated micro-service project for an E-Commerce platform'
cover_image: './images/projects/ecommerce-microservice/ECommerce-Microservice-Architecture.drawio.png'
tags: 'Java,Spring Boot,Kafka,MongoDB,MySQL'
---

# What Is This Project About

For this project, I developed a fully integrated E-commerce service that allows users to create orders, check products
and inventory and successfully place orders if products are in stock.
Functionality includes product and inventory queries, order placements, event-driven email notifications using Kafka. Ensured security with Spring WebFlux Security and OAuth 2.0 JWT authentication. Implemeneted inter-service communication using Spring Cloud Netflix Eureka with inter-service
fault tolerance using Spring Cloud Circuit Breaker via the Resilience4j library.
Ensured website functionality with comprehensive unit testing using JUnit5 and MockMvc and integration testing using
TestContainers.
This entire project is Dockerized using, Docker, Docker Hub and Google Cloud Jib.

# Technologies Used

Java 17,
Spring Boot 3.0.5,
Spring Security,
Spring Cloud Netflix Eureka(Service Discovery),
Apache Kafka (Event-Driven Architecture),
KeyCloak (OAuth 2.0 JWT)
Docker,
Resilience4J (Circuit Breaker),
MySQL,
MongoDB,
Zipkin (Distributed Tracing0,
JUnit5 (Unit Testing)
MockMVC (Unit Testing)
TestContainers(Integration Testing)


# Micro-Service Architecture

![Architecture](/images/projects/ecommerce-microservice/ECommerce-Microservice-Architecture.drawio.png)

# API Endpoints

### Product Service

To view the product catalog, please make a HTTP GET request to `/api/product`
To create a product for the product catalog, please make a HTTP POST request to `/api/product/create` with the body in
JSON,
here is an example:

 ```
 {
    "name": "iphone_12_black",
    "description": "Black iPhone 12",
    "price": 1000
 }
 ```

### Inventory Service

To view the inventory, make a HTTP GET request to `/api/inventory?skuCode={skuCode}`. This will return the
queried product, it's quantity count and will state if its in stock or not.

### Order Service

To create an order, make a HTTP POST request to `/api/order` with the body in JSON,
here is an example:

 ```
 { 
 "orderLineItemsDto": {
    "name": "iphone_12_black",
    "quantity": "1",
    "price": 1000
    }
 }
 ```

The order service will query the inventory service, if the requested item is in stock, the order will be placed
successfully, otherwise it will send a response stating that the product is not in stock.

# Dockerizing The Project

The entire project is dockerized, using Google Cloud Jib to create a docker image of each microservice, which
automatically pushes each build to a remote repository (Docker Hub), where the docker compose file will pull and run
these containers. 3rd-party services, such as Kafka, Key Cloak and ZipKin are also run via docker compose by pulling and spinning up
their respective containers. I am currently in the process of deploying this project using kubernetes via K8s.
