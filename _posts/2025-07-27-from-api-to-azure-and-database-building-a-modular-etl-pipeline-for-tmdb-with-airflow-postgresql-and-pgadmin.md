---
title: "From API to Azure & Database: Building a Modular ETL Pipeline for TMDB
  with Airflow, PostgreSQL & pgAdmin"
excerpt: This project walks through a hands-on ETL pipeline using The Movie
  Database (TMDB) API, orchestrated with Apache Airflow, loaded into PostgreSQL,
  and visualized/debugged via pgAdmin. Learn how to build, monitor, and validate
  your ETL stack with cloud integration via Azure Blob Storage.
coverImage: /assets/etlairflow.png
date: 2025-07-27T17:35:00.000Z
link: https://github.com/AnnieFiB/DataEngineering/tree/main/airflow_dags/dags/dag_tmdb
---
#### **Introduction**

If you're looking to level up your data engineering skills, this TMDB pipeline project demonstrates a real-world use case with proper modularity, cloud integration, and visual validation via pgAdmin. From raw JSON API responses to a clean, queryable dataset in PostgreSQL, the pipeline handles it all—automatically.

* * *

#### **Stack Overview**

*   **Apache Airflow**: Task scheduling and orchestration
    
*   **TMDB API**: Source of movie metadata
    
*   **PostgreSQL**: Target data warehouse
    
*   **pgAdmin**: GUI for PostgreSQL exploration and validation
    
*   **Azure Blob Storage**: Backup and cloud integration
    
*   **Python + SQLAlchemy**: ETL logic and DB interfacing
    

* * *

#### **Step-by-Step Breakdown**

##### **1\. Extract with TMDB API**

The `tmdb_extract_movie.py` script uses Python's `requests` module to pull movie metadata (titles, ratings, overviews, etc.) from TMDB’s paginated API.  
Each record is tagged with a `batch_id` and `timestamp` before being stored locally in `allmovies.csv`.

##### **2\. Transform**

`tmdb_transform_movie.py` cleans and structures the data:

*   Selects key fields
    
*   Renames columns
    
*   Normalizes `release_date` formats
    
*   Writes output to `CleanedMovies.csv`
    

##### **3\. Load to PostgreSQL**

The `tmdb_load_movie.py` script:

*   Uses SQLAlchemy ORM + core SQL for fast upserts
    
*   Leverages `ON CONFLICT DO UPDATE` to maintain data consistency
    
*   Connects to PostgreSQL using credentials from `.env`
    

##### **4\. Explore in pgAdmin**

Once loaded, pgAdmin provides a visual interface to:

*   Confirm schema structure
    
*   Inspect transformed movie records
    
*   Run custom SQL queries (e.g., top 10 rated movies this month)
    
*   Monitor table growth across batches
    

This makes debugging and stakeholder reporting far easier compared to CLI-only workflows.

* * *

#### **Airflow DAG Orchestration**

The `tmdb_dag.py` integrates the whole flow into a three-step DAG:

*   `extract_task` — pulls movie data (example: pages 1–10)
    
*   `transform_task` — cleans and formats
    
*   `load_task` — inserts into PostgreSQL and uploads to Azure Blob
    

The DAG utilises XComs to pass data between tasks and incorporates retry logic and modularity for easy reusability.

* * *

#### **Azure Integration**

After loading the clean dataset into the database, the same dataset is pushed to **Azure Blob Storage** via the Azure Python SDK. This allows for:

*   Decoupled analytics (Power BI, Synapse)
    
*   Offsite backups
    
*   Data sharing with other teams/tools
    

* * *

#### **Why pgAdmin Matters**

pgAdmin turns PostgreSQL from a black box into a data lab. Whether you're verifying ETL results, troubleshooting NULL values, or writing advanced analytics queries, pgAdmin drastically shortens your feedback loop. In this pipeline, it was used to:

*   Validate schema deployment
    
*   Confirm upserts and deduplication
    
*   Preview recent movie loads
    

* * *

#### **Next Steps**

*   Add Airflow schedules to automate daily or weekly ingestion
    
*   Connect Power BI or Tableau to PostgreSQL for live dashboards
    
*   Add data lineage tracking and logging
    
*   Pull in genre, cast, and crew data as additional dimensions