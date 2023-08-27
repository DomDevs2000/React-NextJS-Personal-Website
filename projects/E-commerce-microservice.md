---
title: 'E-Commerce Microservice'
date: 'July 1, 2023'
description: 'Fully integrated micro-service project for an E-Commerce platform'
cover_image: './images/projects/ecommerce-microservice/ECommerce-Microservice-Architecture.drawio.png'
tags: 'Java,Spring Boot,Kafka,MongoDB,MySQL'
---

View this project in [GitHub](https://github.com/DomDevs2000/ECommerce-Microservice)

## Project Description

For this project, I developed a fully integrated E-commerce service that allows users to create orders, check products
and inventory and successfully place orders if products are in stock.
Functionality includes product and inventory queries, order placements, and event-driven notifications using Kafka once
orders are successfully placed. Ensured security with Spring WebFlux Security and OAuth 2.0 JWT authentication.
Implemented inter-service communication using Spring Cloud Netflix Eureka with inter-service
fault tolerance using Spring Cloud Circuit Breaker via the Resilience4j library.
Ensured website functionality with comprehensive unit testing using JUnit5 and MockMvc and integration testing using
TestContainers.
This entire project is Dockerized using Docker, Docker Hub and Google Cloud Jib.

## Technologies Used

-   Java 17
-   Spring Boot 3.0.5
-   Spring Security
-   Spring Cloud Netflix Eureka(Service Discovery)
-   Apache Kafka (Event-Driven Architecture)
-   KeyCloak (OAuth 2.0 JWT)
-   Docker
-   Resilience4J (Circuit Breaker)
-   MySQL
-   MongoDB
-   Zipkin (Distributed Tracing)
-   JUnit5 (Unit Testing)
-   MockMVC (Unit Testing)
-   TestContainers(Integration Testing)

## Microservice Architecture

![Architecture](/images/projects/ecommerce-microservice/ECommerce-Microservice-Architecture.drawio.png)

## Why Did I Decide To Create This Project?

I decided to build a microservice architecture due to the fact I've not built one before and wanted to dive deeper and
learn how to create a microservice project, find out its best uses and its drawbacks and how it compares to other types
of architectures like monolith projects. The idea to create e E-commerce related services as fact I wanted
to have hands-on experience on how real world services would work and interact under this specific architecture. I also
wanted to create a project which was a step up from traditional small scale CRUD applications I have built in the past,
so I thought a microservice architecture of an E-commerce platform was a great choice.

# Services In Action

### Eureka

Once the docker containers have spun up via docker compose, we need to check that all services are registered to the
Eureka discovery server. To do this we need to visit port `8761` and will be greeted with this screen:
![Eureka](/images/projects/ecommerce-microservice/eureka.png)
Here we can see that all services are registered to the Eureka server.

### KeyCloak

Before we can use our services, we need to ensure we have an OAuth 2 JWT token, otherwise each service will return a 401
error for being unauthorised. To do this, we need to create a client inside Keycloak, retrieve the realm token URI and
the client secret, so that we can generate a token inside a HTTP REST Client such as Postman or Insomnia.

### Product Service

To view the product catalog, make a HTTP GET request to `/api/product`
To create a product for the product catalog, please make a HTTP POST request to `/api/product/create` with the body in
JSON, here is an example:

```
{
   "name": "iphone_12_black",
   "description": "Black iPhone 12",
   "price": 1000
}
```

### Inventory Service

To view the inventory, make a HTTP GET request to `/api/inventory?skuCode={skuCode}`. This will return the
queried product, and will state if its in stock or not.

![Is In Stock](/images/projects/ecommerce-microservice/inventory-service-get.png)

Here is an example where the product is not in stock, we can see that it returns false.

![Not in stock ](/images/projects/ecommerce-microservice/inventory-service-no-item.png)

### Order Service

To create an order, make a HTTP POST request to `/api/order` with the body in JSON,
here is an example:

```
{
"orderLineItemsDto": [
    {
   "name": "iphone_12_black",
   "quantity": "1",
   "price": 1000
    }
]
}
```

The order service will query the inventory service, if the requested item is in stock, the order will be placed
successfully, otherwise it will send a response stating that the product is not in stock.

![Order Placed](/images/projects/ecommerce-microservice/order-service.png)

### Notification Service

Once the order is successfully placed, the notification service (powered by kafka) will return in the logs including the
auto generated order id.

![Notification](/images/projects/ecommerce-microservice/notification-service.png)

### Zipkin - Distributed Tracing

Zipkin allows us to see the traces of each HTTP request. ZipKin helps gather timing data needed to troubleshoot latency
problems in service architectures

![Zipkin](/images/projects/ecommerce-microservice/zipkin.png)

# Testing

I implemented integration testing in this project, utilising the TestContainers plugin. This test allows me to spin up a
container with a database, build and save or search that object in the database. 3 services were tested (Product,
Inventory and Order) ensuring that the services' main function was carried out.

#### Inventory Service

For example, this tests the inventory service and checks that the inventory was queried. The first test checks the
container is running.
![Inventory Test](/images/projects/ecommerce-microservice/test-inventory-service.png)

Here we can see in the logs that the inventory was in fact checked, as the Inventory Service logs "Checking inventory"
when a request is made.
![Logs](/images/projects/ecommerce-microservice/test-inventory-logs.png)

The other service tests are very similar, either creating a new product in a mongodb database or creating an order for
the order service.

#### Product Service

Here we can see that a product is saved.
![Product Service](/images/projects/ecommerce-microservice/test-product-service.png)

#### Order Service

Test result for order service:
![Order Service](/images/projects/ecommerce-microservice/test-order-service.png)

### Test Coverage

As we are integration testing each service's full function and not specific units, class coverage is the best indicator
that we are in fact testing the correct things. Each test is achieving 75-100% class coverage.

##### Order Service Coverage

![Order Service Coverage](/images/projects/ecommerce-microservice/test-coverage-order.png)

##### Inventory Service Coverage

![Inventory Service Coverage](/images/projects/ecommerce-microservice/test-coverage-inventory.png)

##### Product Service Coverage

![Product Service Coverage](/images/projects/ecommerce-microservice/test-coverage-product.png)

# Dockerizing The Project

The entire project is dockerized, using Google Cloud Jib to create a docker image of each microservice, which
automatically pushes each build to a remote repository (Docker Hub), where the docker compose file will pull and run
these containers. 3rd-party services, such as Kafka, Key Cloak and ZipKin are also run via docker compose by pulling and
spinning up
their respective containers. I am currently in the process of deploying this project using Kubernetes via K8s.

## What Did I Learn?

I learnt a lot about microservices architecture, connecting each service using API gateways, inter-service
communication using service discovery and registry as well as implementing inter-service fault tolerance. In addition to
this, I have learnt a lot about how Kafka and event-driven architecture works. I have also deepened my object-oriented
programming skills by implementing consistent DTO (Data Transfer Objects) and MVC (Model, View, Controller) design
patterns. I believe microservices are great, however, should be created once a project is already built as a monolithic and when
needed to scale further, slowly migrate to microservices, instead of creating the entire project as a microservice from
the start.
