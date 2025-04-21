---
title: "Selling Smarter: Predicting Customer Conversion in Bank Telemarketing
  Campaigns with Machine Learning"
excerpt: Cold calls are costly. What if we could predict which customers are
  most likely to say "yes" before dialing? In this project, I built a predictive
  modeling pipeline that helps banks focus on leads that convert—saving time,
  money, and morale.
coverImage: /assets/banktelmart.png
date: 2023-05-22T00:00:00.000Z
link: https://github.com/AnnieFiB/my_projects/tree/main/DataAnalysis
---
#### **📊 The Business Problem**

Banks regularly run telemarketing campaigns to promote products like term deposits. But success rates are typically low—most people hang up, and agents waste time calling unlikely prospects. I asked: **Can we use data to predict which customers are likely to subscribe, and prioritise those calls?**

This project tackles exactly that using a real-world dataset of Portuguese bank telemarketing calls.

#### **💡 Project Goal**

Telemarketing remains a common channel in the banking sector, but with low conversion rates and high resource costs. My objective was clear: **Build a machine learning model to predict whether a customer will subscribe to a term deposit** based on call and demographic data, and make the process smarter, faster, and more efficient.

* * *

#### **🔍 Step 1: Exploratory Data Analysis (EDA)**

Using a real dataset of Portuguese bank marketing campaigns, I explored the relationships between customer attributes and subscription behavior.  
Key findings:

*   **Call duration** is by far the strongest indicator of subscription—longer conversations increase likelihood.
    
*   **Month of contact** matters: May has high call volume but lower success, whereas October shows better conversion rates.
    
*   **Job type** and **education level** subtly influence outcomes, hinting at financial awareness and risk appetite.
    

I visualised distributions, correlations, and campaign effectiveness to guide feature selection and model strategy.

* * *

#### **🧼 Step 2: Preprocessing & Feature Engineering**

To prepare the dataset for machine learning:

*   Cleaned nulls and removed leakage features (e.g., duration was used with caution).
    
*   Categorical variables were **encoded** using One-Hot and Label Encoding.
    
*   The target variable (subscription) was **binary encoded**.
    
*   I addressed **class imbalance** using **SMOTE** and stratified sampling to avoid bias in model predictions.
    
*   Features were **scaled** to ensure consistent weight across models like Logistic Regression.
    
*   **No use was made of previous campaign outcomes (**`poutcome`**)**, focusing instead on real-time customer features.
    

* * *

#### **Step 3: Model Building & Tuning**

I trained and compared multiple models:

*   **Logistic Regression** for interpretability.
    
*   **Random Forest** for robustness and feature importance.
    
*   **XGBoost** for high performance on tabular data.
    

After testing across cross-validation folds, 👉 **Random Forest Classifier** emerged as the best performer with:

*   **Accuracy**: 89%
    
*   **Recall (True Positive Rate)**: 75%
    
*   **Precision**: 87%
    
*   **F1-Score**: 80%
    

These results strike a good balance, correctly identifying subscribers without over-predicting and wasting agent effort.

* * *

* * *

#### **📈 Insights for Strategy**

The model does more than predict—it reveals strategy:

*   **When to call**: Focus campaigns on **specific months** and customer **job segments** with higher success rates. May and October are peak months.
    
*   Monitor and optimise **call durations**—but don’t rely solely on them as they’re influenced post-contact.
    
*   **Who to target**: Retired clients and students show higher conversion rates.
    
*   **What to avoid**: Short calls and clients with negative outcomes from past campaigns.
    
*   Data shows potential for **targeted pre-qualification** before dialling begins.
    

These insights help craft more effective campaigns, not just more accurate ones.

* * *

#### **🔧 What I Learned**

This project sharpened my skills in:

*   End-to-end pipeline creation (EDA ➝ preprocessing ➝ modelling ➝ evaluation).
    
*   Feature encoding and handling imbalanced classes.
    
*   Model tuning and selection based on practical metrics like recall and precision, not just accuracy.
    

* * *

#### 🚀 **Next Steps**

*   Deploying this model into a **Streamlit dashboard** for use by marketing teams.
    
*   Integrating real-time prediction based on live call data.
    
*   Testing model generalisation on newer customer data.
    

* * *

#### **🚀 Final Thoughts**

This project proves machine learning can turn noisy marketing campaigns into **precision targeting tools**. By building a pipeline that spans from raw data to business insight, I’ve created a solution that could help real organisations boost ROI and improve customer experience.

* * *

💬 **Want to collaborate, or see the** [**code**](https://github.com/AnnieFiB/my_projects/blob/main/DataAnalysis/notebooks/Bank_Telemarketing_Predictive_Modeling_EDA_ML.ipynb) **and visuals in action?** \[Let’s talk.\]