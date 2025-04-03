---
title: Optimizing Mental Health Data Management Using SQLAlchemy
excerpt: Discover how studying abroad impacts mental health through data-driven
  insights. Analyzing 2018 survey data from a Japanese university, this SQL and
  Python-powered study reveals key correlations between social connectedness,
  acculturative stress, and depression—with actionable recommendations to
  support international students. Read the full analysis.
coverImage: /assets/sqlmntal.avif
date: 2023-05-22T00:00:00.000Z
link: https://github.com/AnnieFiB/my_projects/blob/main/DataAnalysis/notebooks/MentalHealthSQL_Panda.ipynb
---
# **How Studying Abroad Affects Mental Health: A Data-Driven Analysis**

## **Introduction**

Studying abroad can be a transformative experience, but it also brings unique mental health challenges. Using a 2018 survey dataset from a Japanese international university, this project analyzes the psychological impact of studying in a foreign country. Leveraging **SQL, Python (Pandas, SQLAlchemy), and data visualization tools**, I explored how factors like social connectedness, acculturative stress, and length of stay correlate with depression—and why international students may face higher risks.

## **Key Findings at a Glance**

1.  **Higher Depression Scores**
    
    1.  International students averaged **8.5/25** on the PHQ-9 depression scale, compared to 8.0 for domestic students.
        
2.  **Social Connectedness Matters**
    
    1.  A strong negative correlation (-0.54) between social ties and depression for international students.
        
3.  **Acculturative Stress Plays a Role**
    
    1.  Stress levels showed a **moderate positive correlation (0.41)** with depression for international students.
        
4.  **Length of Stay Has Mixed Effects**
    
    1.  Depression scores fluctuated for international students over time, peaking after 6+ years.
        

## **Methodology: SQL & Python in Action**

### **Tools Used**

*   **Data Extraction**: Kaggle API
    
*   **Analysis**: SQLAlchemy, Pandas
    
*   **Visualization**: Matplotlib, Seaborn
    

## **SQL Queries for Insights**

I ran targeted SQL queries to compare international and domestic students:

**Example: Social Connectedness vs. Depression**

<p style="text-align: center"><code>SELECT student_type, AVG(social_connectedness_score) AS avg_scs, AVG(PHQ9_depression_score) AS avg_depression FROM students_mental_health_data</code></p><p style="text-align: center"><code>GROUP BY student_type;</code></p>

```
Result: International students with lower social connectedness averaged 20% higher depression scores.
```

*   _As social ties strengthen, depression scores drop, especially for international students._
    

**Acculturative Stress Impact**

*   _Higher stress = Higher depression, with international students most affected._
    

## **Actionable Recommendations**

1.  **For Universities**:
    
    1.  Expand peer mentorship and cultural integration programs
        
    2.  Offer targeted counseling for long-term international students.
        
2.  **For Students**:
    
    1.  Prioritize building social networks early.
        
    2.  Use stress-management resources (e.g., workshops, mindfulness apps).
        

## **Future Research Directions :** To deepen these insights, future studies could explore:

*   The role of **language proficiency** in stress levels.
    
*   How **extracurriculars** (e.g., clubs, sports) mitigate depression.
    
*   Longitudinal tracking of mental health trends.
    

## **Conclusion**

Data reveals a clear need for tailored mental health support for international students. By addressing social isolation and acculturative stress, universities can foster healthier, more inclusive environments—turning challenges abroad into opportunities for growth.

**Explore the Code & Dataset**: \[[GitHub Repo Link\]](https://github.com/AnnieFiB/my_projects/tree/main/DataAnalysis) | **Questions?** Let’s discuss in the comments!

<p style="text-align: center"><strong><em>#StudyAbroad #MentalHealth #DataScience #HigherEducation</em></strong></p><p style="text-align: center"><strong><em>Call-to-Action: "Which factor surprised you most? Share your thoughts below!"</em></strong></p>