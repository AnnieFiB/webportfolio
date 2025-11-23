---
title: Real-Time Stock Market Analytics with Kafka, Spark and Postgres
excerpt: Real-time insight matters. This project streams live stock market data
  from Alpha Vantage into Kafka, processes it with Spark, and stores
  analytics-ready results in Postgres—all fully containerised with Docker. Power
  BI sits on top for instant visualisation. A clean, scalable pipeline built for
  modern data engineering and financial analytics.
coverImage: /assets/Data_pipeline_Archit.png
date: 2025-09-30T17:00:00.000Z
link: |
  https://github.com/AnnieFiB/Project1-StockMarket
---
#DataPipeline #SparkStreaming #KafkaStreams #ETL #AIandData #CloudEngineering #OpenSource #Analytics #TimeSeriesData #FinancialAnalytics #DeveloperProjects

## **Real-Time Stock Market Analytics Pipeline Using Kafka, Spark & Docker**

In today’s financial markets, speed and intelligence are key determinants of competitive advantage. This article walks you through building a **real-time stock market analytics pipeline** using **Docker, Kafka, Spark Streaming, Postgres**, and **Power BI**—designed to collect, stream, process, store, and visualise stock price data live.

* * *

### **Table of Contents**

*   The Problem: Why Real-Time Market Data
    
*   The Architecture: API → Kafka → Spark → Postgres → Power BI
    
*   Project Structure
    
*   Running the Pipeline
    
*   Verifying Component Health
    
*   Why This Architecture Matters
    
*   Future Enhancements
    

* * *

## **Why Real-Time Market Data Matters**

Stock market prices update **every second**. Traditional batch workflows can’t keep up with the fast pace of modern financial analytics.

A real-time data pipeline allows you to:

*   Monitor price changes as they happen
    
*   Build live dashboards
    
*   Process high-frequency data streams
    
*   Support algo-trading research
    
*   Store and analyse historical patterns
    

This project solves all of these using open-source tools and a clean microservice architecture.

* * *

## **System Architecture**

![Data Pipeline Architecture](https://chatgpt.com/mnt/data/ed236cad-5a82-4f55-86ee-22a2706dab3a.png)

\[Alpha Vantage API\] Fetches live stock prices

|

v

\[Kafka Producer Container\]( Publishes API data to a Kafka topic) ---> \[Kafka Broker Container\](Handles buffering + real-time streaming) ---> \[Spark Consumer Container\](Parses, cleans, timestamps & transforms)

|

v

\[Postgres Container\](Stores processed OHLCV data) ---> \[Power BI Dashboard\](Reads Postgres to show live visuals)

* * *

## **Project Structure**

```bash
Project1-StockMarket/
├── docker-compose.yml
├── spark/
│   ├── consumer.py
│   └── Dockerfile
├── api/
│   ├── producer.py
│   └── requirements.txt
├── db_init/
│   └── schema_tables.sql
└── notebooks/
    └── stock_market_analysis.pbix
```

Each component is isolated, scalable, and containerised.

* * *

## **Live Data Ingestion (Producer)**

The API service sends requests to **Alpha Vantage**, retrieves stock data, and pushes JSON events to Kafka:

```python
payload = requests.get(ALPHA_VANTAGE_URL).json()
producer.send(topic, value=payload)
```

This ensures data continues to flow even if downstream services restart.

* * *

## **Real-Time Stream Processing with Spark**

The Spark consumer listens to the Kafka topic:

```python
raw = spark.readStream.format("kafka") \
      .option("kafka.bootstrap.servers", "kafka:9092") \
      .option("subscribe", topic) \
      .load()
```

Spark then:

*   Parses JSON
    
*   Converts timestamps
    
*   Normalises OHLCV fields
    
*   Writes final records into Postgres
    

* * *

## **Storing Processed Data in Postgres**

Postgres serves as the central store:

```sql
SELECT symbol, bar_time, open, close, volume
FROM events_stream
ORDER BY bar_time DESC;
```

You can now build analytics on top of it or connect Power BI for visualisation.

* * *

## **Power BI Integration**

Connect Power BI Desktop:

```
Server: localhost:5434  
Database: market_pulse  
User: admin  
Password: admin
```

This gives you:

*   Time-series charts
    
*   Volume bars
    
*   Live refresh dashboards
    
*   Symbol comparison visuals
    

* * *

## **Running the Entire Stack with Docker**

You can start everything with one command:

```bash
docker compose up -d --build
```

Check running containers:

```bash
docker compose ps
```

Useful URLs:

*   Kafka UI → [http://localhost:8082](http://localhost:8082)
    
*   Spark Master → [http://localhost:8080](http://localhost:8080)
    
*   Postgres → [localhost:5434](http://localhost:5434)
    
*   pgAdmin → [http://localhost:5050](http://localhost:5050)
    

* * *

## **Monitoring & Debugging Tools**

Tail logs:

```bash
docker compose logs -f api
docker compose logs -f spark
docker compose logs -f kafka
```

Verify Spark has Kafka + Postgres JARs:

```bash
docker compose exec spark bash -lc \
"ls /opt/bitnami/spark/jars | grep kafka"
```

* * *

## **Why This Architecture Works**

This pipeline reflects what real trading desks and data engineering teams use:

*   High availability
    
*   Horizontal scalability
    
*   Real-time processing
    
*   Low latency
    
*   Easy to extend
    
*   Full container isolation
    

You can expand it into:

*   Algo-trading simulations
    
*   High-frequency analytics
    
*   Real-time alerting systems
    
*   Multi-symbol portfolio dashboards
    

* * *

## **Future Enhancements**

*   Add **Apache Flink** for lower latency
    
*   Use **Kubernetes** for scaling
    
*   Introduce ML price prediction models
    
*   Store OHLCV snapshots in a warehouse (Snowflake/BigQuery)
    
*   Add WebSockets or GraphQL API
    

* * *

## **Conclusion**

This project provides a **production-style fintech pipeline** utilising fully open-source tools. With Docker, Kafka, Spark, and Postgres, you can build a financially-focused real-time analytics engine — from API to dashboards — in minutes.

<p style="margin-top:20px;">

<a href="[https://github.com/AnnieFiB/Project1-StockMarket](https://github.com/AnnieFiB/Project1-StockMarket)"

target="\_blank"

style="padding:12px 20px; background:#24292e; color:#fff; text-decoration:none; border-radius:6px;">

⭐ View Project on GitHub

</a>

</p>