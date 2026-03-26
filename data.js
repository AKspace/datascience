const STUDY_DATA = {
  meta: {
    name: "Anurag Kushwaha",
    title: "Data Science & ML Mastery Plan",
    startDate: "2026-03-25",
    totalWeeks: 8
  },
  portals: [
    { name: "StrataScratch", url: "https://platform.stratascratch.com", desc: "SQL & Python interview problems", category: "Practice" },
    { name: "LeetCode Database", url: "https://leetcode.com/problemset/database/", desc: "SQL interview questions", category: "Practice" },
    { name: "Kaggle", url: "https://www.kaggle.com", desc: "Datasets, notebooks, competitions", category: "Projects" },
    { name: "Google Colab", url: "https://colab.research.google.com", desc: "Free GPU Jupyter notebooks", category: "Tools" },
    { name: "IBM Skills Network", url: "https://skills.network", desc: "IBM course labs and projects", category: "Learning" },
    { name: "Coursera", url: "https://www.coursera.org", desc: "Structured courses with certificates", category: "Learning" },
    { name: "HuggingFace", url: "https://huggingface.co", desc: "NLP models, datasets, spaces", category: "NLP/AI" },
    { name: "Databricks Academy", url: "https://academy.databricks.com", desc: "Databricks & Spark learning", category: "Tools" },
    { name: "Towards Data Science", url: "https://towardsdatascience.com", desc: "DS articles and tutorials", category: "Reading" },
    { name: "Microsoft Learn DP-100", url: "https://learn.microsoft.com/en-us/certifications/exams/dp-100/", desc: "Azure Data Scientist Associate", category: "Certification" },
    { name: "Pandas Docs", url: "https://pandas.pydata.org/docs/", desc: "Official Pandas documentation", category: "Reference" },
    { name: "scikit-learn Docs", url: "https://scikit-learn.org/stable/", desc: "Official scikit-learn docs & examples", category: "Reference" },
    { name: "Seaborn Gallery", url: "https://seaborn.pydata.org/examples/", desc: "Visualisation examples & code", category: "Reference" },
    { name: "GitHub", url: "https://github.com", desc: "Host your portfolio projects", category: "Projects" },
    { name: "W3Schools SQL", url: "https://www.w3schools.com/sql/", desc: "SQL quick reference", category: "Reference" }
  ],
  weeks: [
    {
      week: 1,
      phase: 1,
      title: "Pandas & NumPy Mastery",
      goal: "Write Pandas data cleaning and transformation code fluently without referencing documentation",
      days: [
        { day: 1, topic: "Pandas — loc, iloc, dropna, fillna", tasks: ["Open notebook, create dataframe with NaNs", "Practice df.dropna(axis=0) vs df.dropna(axis=1)", "Practice df.fillna() with mean, median, and specific values", "Practice loc vs iloc on a non-default index"], resources: [{ name: "Pandas Docs — Indexing", url: "https://pandas.pydata.org/docs/user_guide/indexing.html" }, { name: "StrataScratch — Pandas basics", url: "https://platform.stratascratch.com" }] },
        { day: 2, topic: "Pandas — groupby, agg, pivot_table", tasks: ["Practice groupby with multiple columns", "Use agg with dict for different functions per column", "Build a pivot_table with margins=True", "Reset index after groupby"], resources: [{ name: "Pandas groupby guide", url: "https://pandas.pydata.org/docs/user_guide/groupby.html" }] },
        { day: 3, topic: "Pandas — merge, concat, join", tasks: ["Practice inner, left, right, outer merge", "Use concat to stack dataframes vertically and horizontally", "Handle duplicate columns after merge with suffixes", "Practice merge on multiple keys"], resources: [{ name: "Pandas merge docs", url: "https://pandas.pydata.org/docs/user_guide/merging.html" }, { name: "StrataScratch — join problems", url: "https://platform.stratascratch.com" }] },
        { day: 4, topic: "NumPy — arrays, reshape, broadcasting", tasks: ["Create arrays with zeros, ones, arange, linspace", "Practice reshape and flatten", "Practice broadcasting with mismatched shapes", "Use np.where for conditional logic"], resources: [{ name: "NumPy quickstart", url: "https://numpy.org/doc/stable/user/quickstart.html" }] },
        { day: 5, topic: "Pandas — apply, lambda, str operations", tasks: ["Use apply with custom lambda functions", "Practice str.contains, str.replace, str.split", "Apply function to multiple columns simultaneously", "Solve 3 StrataScratch Pandas problems"], resources: [{ name: "StrataScratch Python", url: "https://platform.stratascratch.com" }] },
        { day: 6, topic: "Practice day — data cleaning pipeline", tasks: ["Download a messy Kaggle dataset", "Build a full cleaning pipeline: drop nulls, fix types, rename, reset index", "Write the pipeline as a reusable function", "Push notebook to GitHub"], resources: [{ name: "Kaggle datasets", url: "https://www.kaggle.com/datasets" }, { name: "GitHub", url: "https://github.com" }] },
        { day: 7, topic: "Review & consolidate week 1", tasks: ["Redo the 3 StrataScratch problems from day 5 without looking at solutions", "Write down 5 Pandas methods you still find confusing", "Read one Towards Data Science article on Pandas tips", "Plan week 2 focus areas"], resources: [{ name: "Towards Data Science", url: "https://towardsdatascience.com" }] }
      ]
    },
    {
      week: 2,
      phase: 1,
      title: "SQL Analytics Deep Dive",
      goal: "Solve mid-level SQL window function and CTE problems without hints",
      days: [
        { day: 1, topic: "Window functions — ROW_NUMBER, RANK, DENSE_RANK", tasks: ["Write RANK vs DENSE_RANK on same dataset to see difference", "Use ROW_NUMBER to deduplicate rows", "Practice PARTITION BY with multiple columns", "Solve 2 LeetCode DB window function problems"], resources: [{ name: "LeetCode Database", url: "https://leetcode.com/problemset/database/" }, { name: "W3Schools Window Functions", url: "https://www.w3schools.com/sql/sql_window_functions.asp" }] },
        { day: 2, topic: "Window functions — LAG, LEAD, running totals", tasks: ["Use LAG to compare current vs previous row value", "Use LEAD for forward-looking comparisons", "Build a running total with SUM OVER ORDER BY", "Build a 7-day rolling average"], resources: [{ name: "StrataScratch SQL", url: "https://platform.stratascratch.com" }] },
        { day: 3, topic: "CTEs — simple and chained", tasks: ["Rewrite a nested subquery as a CTE", "Chain two CTEs where second references first", "Use CTE to calculate and then filter on aggregated value", "Solve 2 StrataScratch CTE problems"], resources: [{ name: "StrataScratch SQL", url: "https://platform.stratascratch.com" }] },
        { day: 4, topic: "Advanced joins and set operations", tasks: ["Practice SELF JOIN for hierarchical data", "Use UNION vs UNION ALL — understand difference", "Use EXCEPT and INTERSECT", "Solve a complex multi-table join problem on LeetCode"], resources: [{ name: "LeetCode Database", url: "https://leetcode.com/problemset/database/" }] },
        { day: 5, topic: "Aggregation patterns and CASE WHEN", tasks: ["Use CASE WHEN inside SUM for conditional aggregation", "Practice HAVING vs WHERE on grouped data", "Build a pivot using CASE WHEN MAX pattern", "Solve 3 mixed SQL problems"], resources: [{ name: "StrataScratch SQL", url: "https://platform.stratascratch.com" }] },
        { day: 6, topic: "Banking-domain SQL problems", tasks: ["Write query: find accounts with 3 consecutive days of transactions", "Write query: detect duplicate transactions within 1 hour", "Write query: running balance per account", "Write query: top 3 clients by revenue per region using window function"], resources: [{ name: "StrataScratch SQL", url: "https://platform.stratascratch.com" }] },
        { day: 7, topic: "SQL review and timed practice", tasks: ["Set a 20-min timer and solve 2 unseen LeetCode DB medium problems", "Review any incorrect solutions", "Write a cheat sheet of window function syntax you keep forgetting", "Read article on SQL optimisation basics"], resources: [{ name: "LeetCode Database", url: "https://leetcode.com/problemset/database/" }, { name: "Towards Data Science SQL", url: "https://towardsdatascience.com/tagged/sql" }] }
      ]
    },
    {
      week: 3,
      phase: 1,
      title: "Machine Learning Foundations",
      goal: "Build, evaluate, and explain 3 ML models from scratch on a real dataset",
      days: [
        { day: 1, topic: "EDA — Exploratory Data Analysis workflow", tasks: ["Load Kaggle dataset, run df.describe() and df.info()", "Plot distributions with seaborn histplot and boxplot", "Build a correlation heatmap", "Identify and document 5 data quality issues in the dataset"], resources: [{ name: "Seaborn gallery", url: "https://seaborn.pydata.org/examples/" }, { name: "Kaggle datasets", url: "https://www.kaggle.com/datasets" }] },
        { day: 2, topic: "Feature engineering and preprocessing", tasks: ["Handle missing values with SimpleImputer", "Encode categorical variables with LabelEncoder and OneHotEncoder", "Scale numerical features with StandardScaler and MinMaxScaler", "Understand when to use each scaling method"], resources: [{ name: "scikit-learn preprocessing", url: "https://scikit-learn.org/stable/modules/preprocessing.html" }] },
        { day: 3, topic: "Logistic Regression and evaluation metrics", tasks: ["Build a classification model with LogisticRegression", "Generate confusion matrix and classification report", "Calculate precision, recall, F1 manually then verify with sklearn", "Plot ROC curve and calculate AUC"], resources: [{ name: "scikit-learn metrics", url: "https://scikit-learn.org/stable/modules/model_evaluation.html" }] },
        { day: 4, topic: "Random Forest and feature importance", tasks: ["Train RandomForestClassifier on same dataset", "Compare accuracy with Logistic Regression", "Plot feature_importances_ as a bar chart", "Use cross_val_score to validate robustness"], resources: [{ name: "scikit-learn Random Forest", url: "https://scikit-learn.org/stable/modules/ensemble.html" }] },
        { day: 5, topic: "Regression models", tasks: ["Use LinearRegression on a regression problem", "Calculate MSE, RMSE, MAE, and R-squared", "Try Ridge and Lasso — understand the regularisation effect", "Plot actual vs predicted values"], resources: [{ name: "scikit-learn linear models", url: "https://scikit-learn.org/stable/modules/linear_model.html" }] },
        { day: 6, topic: "Pipeline and GridSearchCV", tasks: ["Build an sklearn Pipeline combining preprocessing and model", "Use GridSearchCV to tune hyperparameters", "Use best_params_ and best_score_ to report results", "Save the final model with joblib"], resources: [{ name: "scikit-learn Pipeline", url: "https://scikit-learn.org/stable/modules/pipeline.html" }] },
        { day: 7, topic: "End-to-end ML notebook", tasks: ["Build one complete notebook: load data, EDA, feature engineering, train 2 models, compare, pick winner", "Write a markdown summary at the top explaining your decisions", "Push completed notebook to GitHub", "This is your first portfolio project"], resources: [{ name: "Kaggle", url: "https://www.kaggle.com" }, { name: "GitHub", url: "https://github.com" }] }
      ]
    },
    {
      week: 4,
      phase: 1,
      title: "Data Visualisation & NLP Foundations",
      goal: "Build a polished visualisation dashboard and complete a basic NLP classification task",
      days: [
        { day: 1, topic: "Matplotlib and Seaborn — publication quality charts", tasks: ["Create subplots with plt.subplots()", "Customise titles, labels, ticks, and legend", "Build a multi-panel dashboard with 4 chart types", "Save charts as PNG with 300dpi for portfolio"], resources: [{ name: "Seaborn tutorial", url: "https://seaborn.pydata.org/tutorial.html" }] },
        { day: 2, topic: "Plotly — interactive visualisations", tasks: ["Build interactive line chart with plotly.express", "Add dropdown filters to a Plotly chart", "Build a scatter plot with hover data", "Export as HTML for GitHub Pages embedding"], resources: [{ name: "Plotly Python docs", url: "https://plotly.com/python/" }] },
        { day: 3, topic: "Power BI — from data to dashboard", tasks: ["Connect Power BI to a CSV dataset", "Build 3 visuals: bar chart, card KPI, and line trend", "Write a DAX measure using CALCULATE and FILTER", "Add a slicer for date or category filtering"], resources: [{ name: "Microsoft Learn Power BI", url: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi" }] },
        { day: 4, topic: "NLP — text preprocessing pipeline", tasks: ["Tokenise text with NLTK or spaCy", "Remove stopwords, apply stemming and lemmatisation", "Build a TF-IDF matrix with TfidfVectorizer", "Understand difference between TF-IDF and CountVectorizer"], resources: [{ name: "NLTK documentation", url: "https://www.nltk.org" }, { name: "HuggingFace NLP course", url: "https://huggingface.co/learn/nlp-course/chapter1/1" }] },
        { day: 5, topic: "NLP — text classification", tasks: ["Build a sentiment classifier using TF-IDF + Logistic Regression", "Use a public dataset: IMDB reviews or Twitter sentiment", "Evaluate with classification report", "Try HuggingFace pipeline for zero-shot classification"], resources: [{ name: "HuggingFace pipelines", url: "https://huggingface.co/docs/transformers/pipeline_tutorial" }, { name: "Kaggle NLP datasets", url: "https://www.kaggle.com/datasets?tags=13204-NLP" }] },
        { day: 6, topic: "GenAI and LLM concepts", tasks: ["Understand transformer architecture at conceptual level", "Learn: tokenisation, embeddings, attention mechanism", "Read the HuggingFace intro to transformers", "Try a HuggingFace model with 5 lines of code using pipeline()"], resources: [{ name: "HuggingFace NLP course", url: "https://huggingface.co/learn/nlp-course/chapter1/1" }, { name: "Illustrated Transformer", url: "http://jalammar.github.io/illustrated-transformer/" }] },
        { day: 7, topic: "Phase 1 review — mock test prep", tasks: ["Solve 2 unseen Pandas problems timed at 15 min each", "Solve 2 SQL window function problems timed at 20 min each", "Explain your week 3 ML project out loud for 5 minutes as if in an interview", "Generate your Phase 1 progress report from this app"], resources: [{ name: "StrataScratch", url: "https://platform.stratascratch.com" }, { name: "LeetCode Database", url: "https://leetcode.com/problemset/database/" }] }
      ]
    },
    {
      week: 5,
      phase: 2,
      title: "Advanced ML & Model Depth",
      goal: "Understand and implement gradient boosting, handle imbalanced data, and explain model decisions",
      days: [
        { day: 1, topic: "Gradient Boosting — XGBoost and LightGBM", tasks: ["Install and import XGBoost and LightGBM", "Train XGBClassifier on same dataset from week 3", "Compare with Random Forest using cross_val_score", "Tune n_estimators, max_depth, learning_rate"], resources: [{ name: "XGBoost docs", url: "https://xgboost.readthedocs.io" }, { name: "LightGBM docs", url: "https://lightgbm.readthedocs.io" }] },
        { day: 2, topic: "Handling imbalanced datasets", tasks: ["Understand class imbalance with value_counts()", "Apply SMOTE oversampling with imbalanced-learn", "Use class_weight='balanced' in sklearn models", "Compare F1 score before and after balancing"], resources: [{ name: "imbalanced-learn docs", url: "https://imbalanced-learn.org/stable/" }] },
        { day: 3, topic: "Model interpretability — SHAP and feature importance", tasks: ["Install SHAP library", "Generate SHAP summary plot for XGBoost model", "Explain a single prediction with SHAP waterfall plot", "Understand global vs local interpretability"], resources: [{ name: "SHAP docs", url: "https://shap.readthedocs.io" }] },
        { day: 4, topic: "Time series fundamentals", tasks: ["Understand stationarity, trend, seasonality", "Use pandas resample() for time aggregation", "Apply rolling() for moving averages", "Build a simple forecasting model with Prophet or statsmodels"], resources: [{ name: "Facebook Prophet", url: "https://facebook.github.io/prophet/" }, { name: "Towards Data Science time series", url: "https://towardsdatascience.com/tagged/time-series" }] },
        { day: 5, topic: "Clustering — K-Means and DBSCAN", tasks: ["Apply KMeans on a dataset and use elbow method for k", "Visualise clusters with PCA to 2D", "Compare with DBSCAN for density-based clustering", "Explain use cases for each in a banking context"], resources: [{ name: "scikit-learn clustering", url: "https://scikit-learn.org/stable/modules/clustering.html" }] },
        { day: 6, topic: "Dimensionality reduction — PCA and t-SNE", tasks: ["Apply PCA to reduce features, plot explained variance", "Use t-SNE for visualising high-dimensional clusters", "Understand when to use PCA vs t-SNE", "Apply PCA as preprocessing step before ML model"], resources: [{ name: "scikit-learn decomposition", url: "https://scikit-learn.org/stable/modules/decomposition.html" }] },
        { day: 7, topic: "Advanced ML project — financial fraud detection", tasks: ["Download credit card fraud dataset from Kaggle", "Handle severe class imbalance (fraud is ~0.17%)", "Build pipeline: SMOTE + XGBoost + SHAP explanation", "Document model decisions and push to GitHub as portfolio project 2"], resources: [{ name: "Kaggle fraud dataset", url: "https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud" }, { name: "GitHub", url: "https://github.com" }] }
      ]
    },
    {
      week: 6,
      phase: 2,
      title: "Data Engineering & Spark Depth",
      goal: "Bridge your Databricks operations experience into data engineering best practices",
      days: [
        { day: 1, topic: "PySpark — DataFrames and transformations", tasks: ["Create a SparkSession in Databricks or local Spark", "Read CSV into Spark DataFrame", "Apply filter, select, withColumn transformations", "Compare Pandas vs Spark syntax for same operations"], resources: [{ name: "Databricks Academy", url: "https://academy.databricks.com" }, { name: "PySpark docs", url: "https://spark.apache.org/docs/latest/api/python/" }] },
        { day: 2, topic: "PySpark — joins, aggregations, window functions", tasks: ["Perform Spark join and explain broadcast join hint", "Use groupBy().agg() in PySpark", "Apply Spark window functions with partitionBy", "Explain partitioning and its performance impact"], resources: [{ name: "PySpark SQL functions", url: "https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/functions.html" }] },
        { day: 3, topic: "Delta Lake — ACID transactions and time travel", tasks: ["Create a Delta table in Databricks", "Perform MERGE INTO for upsert", "Use time travel to query a previous version", "Understand Delta transaction log structure"], resources: [{ name: "Delta Lake docs", url: "https://docs.delta.io/latest/index.html" }, { name: "Databricks Academy", url: "https://academy.databricks.com" }] },
        { day: 4, topic: "Data pipeline design patterns", tasks: ["Understand medallion architecture: Bronze, Silver, Gold layers", "Design a pipeline for daily banking transaction data", "Implement data quality checks between layers", "Document pipeline design as a diagram"], resources: [{ name: "Databricks medallion architecture", url: "https://www.databricks.com/glossary/medallion-architecture" }] },
        { day: 5, topic: "Azure Data Factory and pipeline orchestration", tasks: ["Understand ADF pipeline triggers and activities", "Compare ADF vs Autosys vs Airflow for orchestration", "Design an ADF pipeline for ETL on Azure", "Connect to your existing Azure knowledge"], resources: [{ name: "Microsoft Learn ADF", url: "https://learn.microsoft.com/en-us/azure/data-factory/" }] },
        { day: 6, topic: "Data quality and testing", tasks: ["Learn Great Expectations library for data validation", "Write 5 data quality checks for a banking dataset", "Understand schema enforcement in Delta Lake", "Build automated data quality report"], resources: [{ name: "Great Expectations docs", url: "https://docs.greatexpectations.io" }] },
        { day: 7, topic: "Data engineering portfolio project", tasks: ["Build an end-to-end pipeline: ingest raw CSV, clean, transform, load to Delta, run quality checks", "Document the medallion architecture used", "Push to GitHub with a clear README explaining the design decisions", "This is portfolio project 3"], resources: [{ name: "GitHub", url: "https://github.com" }, { name: "Kaggle", url: "https://www.kaggle.com" }] }
      ]
    },
    {
      week: 7,
      phase: 2,
      title: "NLP Deep Dive & GenAI",
      goal: "Build a working NLP application using transformers and understand LLM architecture deeply",
      days: [
        { day: 1, topic: "Transformers — architecture deep dive", tasks: ["Read The Illustrated Transformer (Jay Alammar)", "Understand: self-attention, multi-head attention, positional encoding", "Explain transformer in your own words in writing", "Understand how BERT differs from GPT architecturally"], resources: [{ name: "Illustrated Transformer", url: "http://jalammar.github.io/illustrated-transformer/" }, { name: "HuggingFace NLP course", url: "https://huggingface.co/learn/nlp-course/chapter1/1" }] },
        { day: 2, topic: "HuggingFace — using pre-trained models", tasks: ["Use pipeline() for: sentiment, NER, summarisation, Q&A", "Load a pre-trained BERT model with AutoModel", "Tokenise text and understand input_ids, attention_mask", "Fine-tune a small model on custom text data"], resources: [{ name: "HuggingFace docs", url: "https://huggingface.co/docs/transformers/" }] },
        { day: 3, topic: "Text embeddings and semantic search", tasks: ["Generate sentence embeddings with sentence-transformers", "Build a simple semantic search engine on a document set", "Compare cosine similarity between text pairs", "Understand use case: finding similar incidents in production logs"], resources: [{ name: "Sentence Transformers", url: "https://www.sbert.net" }] },
        { day: 4, topic: "RAG — Retrieval Augmented Generation", tasks: ["Understand RAG architecture conceptually", "Build a simple RAG system: embed documents, store, retrieve, generate", "Use LangChain or LlamaIndex for RAG pipeline", "Apply to banking use case: Q&A over financial reports"], resources: [{ name: "LangChain docs", url: "https://python.langchain.com/docs/get_started/introduction" }] },
        { day: 5, topic: "LLM APIs — OpenAI and open source models", tasks: ["Use OpenAI API or HuggingFace inference API", "Build a prompt engineering exercise: zero-shot, one-shot, few-shot", "Understand temperature, max_tokens, system prompt", "Build a simple chat interface with conversation history"], resources: [{ name: "HuggingFace Inference API", url: "https://huggingface.co/docs/api-inference/index" }] },
        { day: 6, topic: "NLP in banking — practical applications", tasks: ["Identify 5 NLP use cases in investment banking: sentiment, contract extraction, anomaly in logs", "Build a proof-of-concept: classify Splunk log messages as normal vs anomaly using NLP", "Connect to your UBS production support experience", "Document the use case with business value framing"], resources: [{ name: "Towards Data Science NLP", url: "https://towardsdatascience.com/tagged/nlp" }] },
        { day: 7, topic: "NLP portfolio project", tasks: ["Build: a document Q&A system using RAG on a set of technical documents", "Or build: a log anomaly detector using text classification", "Push to GitHub with demo screenshots", "This is portfolio project 4 — your most impressive one"], resources: [{ name: "GitHub", url: "https://github.com" }, { name: "HuggingFace Spaces", url: "https://huggingface.co/spaces" }] }
      ]
    },
    {
      week: 8,
      phase: 2,
      title: "Interview Readiness & Portfolio Completion",
      goal: "Be fully interview-ready: 4 GitHub projects, timed coding confidence, strong narrative",
      days: [
        { day: 1, topic: "Portfolio review and README writing", tasks: ["Write professional README for each of 4 GitHub projects", "Add problem statement, approach, results, and tech stack to each", "Add screenshots or output examples", "Create a GitHub profile README linking all projects"], resources: [{ name: "GitHub", url: "https://github.com" }] },
        { day: 2, topic: "Timed coding round simulation", tasks: ["Set 25-min timer — solve a Pandas problem on StrataScratch without hints", "Set 25-min timer — solve a SQL window function problem on LeetCode", "Review and understand any mistakes", "Repeat once more with different problems"], resources: [{ name: "StrataScratch", url: "https://platform.stratascratch.com" }, { name: "LeetCode Database", url: "https://leetcode.com/problemset/database/" }] },
        { day: 3, topic: "System design for data — interview prep", tasks: ["Study: how to design a data pipeline for real-time fraud detection", "Study: how to design a recommendation system", "Prepare a 5-minute verbal walkthrough of your data engineering project", "Practice explaining trade-offs (batch vs streaming, SQL vs NoSQL)"], resources: [{ name: "Towards Data Science", url: "https://towardsdatascience.com" }] },
        { day: 4, topic: "Behavioural + technical story prep", tasks: ["Write STAR answers for: 'Tell me about an ML project you built'", "Write STAR answers for: 'How did you use data to solve a production problem?'", "Prepare your 2-minute intro connecting SRE background to Data Science", "Practise out loud — record yourself if possible"], resources: [] },
        { day: 5, topic: "DP-100 Azure Data Scientist — study session", tasks: ["Review Azure ML Studio: datasets, experiments, pipelines", "Understand AutoML in Azure ML", "Study Azure ML compute clusters and environments", "Take a DP-100 practice quiz"], resources: [{ name: "Microsoft Learn DP-100", url: "https://learn.microsoft.com/en-us/certifications/exams/dp-100/" }, { name: "DP-100 practice assessments", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-data-scientist/" }] },
        { day: 6, topic: "Full mock interview simulation", tasks: ["Ask Claude or a friend to ask: 3 Python/Pandas questions, 2 SQL questions, 2 ML theory questions, 1 project walkthrough, 1 behavioural", "Note every question you hesitate on", "Review hesitation areas", "Generate your final progress report from this app"], resources: [] },
        { day: 7, topic: "Apply — you are ready", tasks: ["Update resume with all 4 GitHub projects listed under a Projects section", "Apply to 5 Data Engineer roles and 3 ML Engineer roles", "Tailor the summary for each application using what you have learned", "Set a weekly goal: 5 applications per week minimum"], resources: [{ name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" }, { name: "Indeed Data Science", url: "https://www.indeed.com/q-Data-Scientist-jobs.html" }] }
      ]
    }
  ]
};
