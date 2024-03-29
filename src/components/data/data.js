const project_filters = ["all", "python", "flask", "javascript", "node", "express", "jquery", "react", "d3", "postgresql", "chai", "restapi", "matplotlib", "scipy", "scikitlearn", "tensorflow", "datascience", "notebooks"]

const projects = [
    {
        id: 29,
        url: "https://github.com/gadenahi/TensorFlow_by_different_api/blob/main/TensorFlow_by_different_api.ipynb",
        image: `${process.env.PUBLIC_URL}/imgs/TensorFlow_by_different_api.png`,
        caption: "TensorFlow by\ndifferent API",
        category: ["python", "matplotlib", "tensorflow", "datascience", "notebooks"]
    },
    {
        id: 28,
        url: "https://github.com/gadenahi/sklearn_different_class_test/blob/main/decisiontree_randomforest_xgboost_test.ipynb",
        image: `${process.env.PUBLIC_URL}/imgs/sklearn_different_class_test.png`,
        caption: "Test by DecisionTree,\nRandomForest,\nand XGBoost",
        category: ["python", "matplotlib", "scikitlearn", "datascience", "notebooks"]
    },
    {
        id: 27,
        url: "https://github.com/gadenahi/Sailfort_Motors_project_lab/blob/main/Activity_%20Course%207%20Salifort%20Motors%20project%20lab.ipynb",
        image: `${process.env.PUBLIC_URL}/imgs/xgboost2-importance.png`,
        caption: "Google Advanced\nData Analytics\nSailfort Motors Project",
        category: ["python", "matplotlib", "scikitlearn", "datascience", "notebooks"]
    },
    {
        id: 26,
        url: "https://github.com/gadenahi/recipe-scheduler",
        image: `${process.env.PUBLIC_URL}/imgs/food_recipe_scheduler.png`,
        caption: "Food Recipe Scheduler",
        category: ["python", "flask", "javascript", "jquery", "postgresql"]
    },
    {
        id: 25,
        url: "https://github.com/gadenahi/car_price_prediction/blob/main/car_analysis.ipynb",
        image: `${process.env.PUBLIC_URL}/imgs/car_price_prediction.png`,
        caption: "Car Price Prediction",
        category: ["python", "matplotlib", "scikitlearn", "datascience", "notebooks"]
    },
    {
        id: 24,
        url: "https://github.com/gadenahi/flask_restapi",
        image: `${process.env.PUBLIC_URL}/imgs/flask_restapi.png`,
        caption: "Flask REST API",
        category: ["python", "flask", "restapi"]
    },
    {
        id: 23,
        url: "https://gadenahi.github.io/cal-kids/",
        image: `${process.env.PUBLIC_URL}/imgs/cal_kids.png`,
        caption: "Cal Kids",
        category: ["javascript", "react"]
    },
    {
        id: 22,
        url: "https://gadenahi.github.io/pf/",
        image: `${process.env.PUBLIC_URL}/imgs/portfolio.png`,
        caption: "Personal Portfolio",
        category: ["javascript", "react"]
    },
    {
        id: 21,
        url: "https://github.com/gadenahi/doc_manage",
        image: `${process.env.PUBLIC_URL}/imgs/report_shopping_site.png`,
        caption: "Report shopping site",
        category: ["python", "flask", "javascript", "jquery", "postgresql", "matplotlib"]
    },
    {
        id: 20,
        url: "https://github.com/gadenahi/blog-site",
        image: `${process.env.PUBLIC_URL}/imgs/blog_site.png`,
        caption: "Blog site",
        category: ["python", "flask", "javascript", "jquery", "postgresql"]
    },
    {
        id: 19,
        url: "https://highlevelwingedcloudcomputing--five-nine.repl.co/",
        image: `${process.env.PUBLIC_URL}/imgs/American_british_english_translator.png`,
        caption: "American/British\nEnglish Translator",
        category: ["javascript", "node", "jquery", "express", "chai"]
    },
    {
        id: 18,
        url: "https://dataplatform.cloud.ibm.com/analytics/notebooks/v2/0e4e40b8-806a-4ff9-a870-dce50ffb78fe/view?access_token=5405e90fef91dc0e596e9949b87b54dfbd0ba201c0157cc45e9ca01f11a35788",
        image: `${process.env.PUBLIC_URL}/imgs/ds_ml_capstone project.png`,
        caption: "Data Science\nMachine Learning\nCapstone Project",
        category: ["python", "matplotlib", "scipy", "scikitlearn", "datascience"]
    },
    {
        id: 17,
        url: "https://github.com/gadenahi/neural_network_sms_text_classifier/blob/master/sms_text_classification.ipynb",
        image: `${process.env.PUBLIC_URL}/imgs/sms_text_classification.png`,
        caption: "Neural Network\nSMS Text Classifier",
        category: ["python", "matplotlib", "tensorflow", "datascience", "notebooks"]
    },
    {
        id: 16,
        url: "https://github.com/gadenahi/predict_healthcare_costs_using_a_regression_algorithm/blob/master/predict_health_costs_with_regression.ipynb",
        image: `${process.env.PUBLIC_URL}/imgs/predict_healthcare_costs.png`,
        caption: "Predict Healthcare_costs\nRegression Algorithm",
        category: ["python", "matplotlib", "tensorflow", "datascience", "notebooks"]
    },
    {
        id: 15,
        url: "https://github.com/gadenahi/book_recommendation_knn/blob/master/book_recommendation_knn.ipynb",
        image: `${process.env.PUBLIC_URL}/imgs/book_recommendation_knn.png`,
        caption: "Book recommendation\nK-Nearest Neighbors",
        category: ["python", "matplotlib", "scipy", "scikitlearn", "datascience", "notebooks"]
    },
    {
        id: 14,
        url: "https://github.com/gadenahi/cat_dog_image_classifier/blob/master/cat_dog_image_classifier.ipynb",
        image: `${process.env.PUBLIC_URL}/imgs/cat_dog_image_classifier.png`,
        caption: "Cat/Dog Image Classifier",
        category: ["python", "matplotlib", "tensorflow", "datascience", "notebooks"]
    },
    {
        id: 13,
        url: "https://github.com/gadenahi/sea_level_predictor",
        image: `${process.env.PUBLIC_URL}/imgs/sea_level_plot.png`,
        caption: "Sea Level Predictor",
        category: ["python", "matplotlib", "scipy", "datascience"]
    },
    {
        id: 12,
        url: "https://github.com/gadenahi/page_view_time_visualizer",
        image: `${process.env.PUBLIC_URL}/imgs/page_view_visualizer_box_plot.png`,
        caption: "Page View Time Visualizer",
        category: ["python", "matplotlib", "datascience"]
    },
    {
        id: 11,
        url: "https://reasonablewobblyfolders--five-nine.repl.co/",
        image: `${process.env.PUBLIC_URL}/imgs/sudoku_solver.png`,
        caption: "Sudoku Solver",
        category: ["javascript", "node", "jquery", "express", "chai"]
    },
    {
        id: 10,
        url: "https://github.com/gadenahi/web_scraping_with_auto_scrolling",
        image: `${process.env.PUBLIC_URL}/imgs/web_scraping_for_ces.png`,
        caption: "Web Scraping for CES",
        category: ["python"]
    },
    {
        id: 9,
        url: "https://gadenahi.github.io/pomodoro-clock/",
        image: `${process.env.PUBLIC_URL}/imgs/pomodoro_clock.png`,
        caption: "Pomodoro Clock",
        category: ["javascript", "react"]
    },
    {
        id: 8,
        url: "https://gadenahi.github.io/drum-machine/",
        image: `${process.env.PUBLIC_URL}/imgs/drum_machine.png`,
        caption: "Drum Machine",
        category: ["javascript", "react"]
    },
    {
        id: 7,
        url: "https://gadenahi.github.io/twitch_streamers/",
        image: `${process.env.PUBLIC_URL}/imgs/twitch_streamers.png`,
        caption: "Twitch Streamers",
        category: ["javascript", "react"]
    },
    {
        id: 6,
        url: "https://gadenahi.github.io/js-calculator/",
        image: `${process.env.PUBLIC_URL}/imgs/calculator.png`,
        caption: "Calculator",
        category: ["javascript", "react"]
    },
    {
        id: 5,
        url: "https://gadenahi.github.io/build_a_wikipedia_viewer/",
        image: `${process.env.PUBLIC_URL}/imgs/wikipedia_viewer.png`,
        caption: "Wikipedia Viewer",
        category: ["javascript", "jquery"]
    },
    {
        id: 4,
        url: "https://gadenahi.github.io/show_the_local_weather/",
        image: `${process.env.PUBLIC_URL}/imgs/local_weather.png`,
        caption: "Show local weather",
        category: ["javascript", "jquery"]
    },
    {
        id: 3,
        url: "https://gadenahi.github.io/visualize-data-with-a-choropleth-map/",
        image: `${process.env.PUBLIC_URL}/imgs/choropleth_map.png`,
        caption: "Choropleth Map for\nUS Educational Attainment",
        category: ["javascript", "d3"]
    },
    {
        id: 2,
        url: "https://gadenahi.github.io/visualize-data-with-a-heat-map/",
        image: `${process.env.PUBLIC_URL}/imgs/global_land_surface_temp.png`,
        caption: "Heat Map for\nGlobal Land-Surface Temp",
        category: ["javascript", "d3"]
    },
    {
        id: 1,
        url: "https://gadenahi.github.io/visualize_data_with_a_treemap_diagram/",
        image: `${process.env.PUBLIC_URL}/imgs/treemap_diagram.png`,
        caption: "Treemap Diagram for\nVideo Game Sales",
        category: ["javascript", "d3"]
    }
]

const skills = ["python", "flask", "javascript", "react", "redux", "node", "express", "jquery", "html", "css", "scss", "bootstrap", "mongodb", "postgresql", "mongoose", "sqlalchemy", "sql", "d3", "selenium", "pandas", "numpy", "matplotlib", "seaborn", "scipy", "scikit-learn", "tensorflow", "chai", "helmetjs", "npm", "github", "jupyter notebooks", "responsive web design"]

const certificate_filters = ["all", "fullstack", "datascience", "python", "javascript", "sql", "bigquery", "ibmcloud", "googlecloud", "aws"]

const org_filters = ["hackerrank", "ibm", "freecodecamp", "google", "aws"]

const certificates = [
    {
        id: 36,
        org: "google",
        url: "https://www.coursera.org/account/accomplishments/professional-cert/P4CBWLJUR6YQ",
        caption: "Google Advanced Data Analytics",
        category: ["google", "python", "pandas", "numpy", "matplotlib", "seaborn", "scikit-learn", "jupyter notebooks"]
    },
    {
        id: 35,
        org: "hackerrank",
        url: "https://www.hackerrank.com/certificates/d4ac27fc8915",
        caption: "Rest API (Intermediate)",
        category: ["hackerrank", "python"]
    },
    {
        id: 34,
        org: "hackerrank",
        url: "https://www.hackerrank.com/certificates/76b8b7245c31",
        caption: "SQL (Intermediate)",
        category: ["hackerrank", "sql"]
    },
    {
        id: 33,
        org: "hackerrank",
        url: "https://www.hackerrank.com/certificates/f89686397a54",
        caption: "CSS",
        category: ["hackerrank"]
    },
    {
        id: 32,
        org: "aws",
        url: "https://www.youracclaim.com/badges/eb85320a-a433-4d44-93eb-a85330ce3182/linked_in",
        caption: "AWS Certified Cloud Practitioner",
        category: ["aws"]
    },
    {
        id: 31,
        org: "hackerrank",
        url: "https://www.hackerrank.com/certificates/f93bcd6d09f9",
        caption: "Python (Advanced) Certificate",
        category: ["python", "hackerrank"]
    },
    {
        id: 30,
        org: "ibm",
        url: "https://credentials.edx.org/credentials/d01d1b57330e483da5f6994e03d83b59/",
        caption: "Professional Certificate, IBM Data Science",
        category: ["datascience", "python", "sql", "ibmcloud", "ibm"]
    },
    {
        id: 29,
        org: "ibm",
        url: "https://credentials.edx.org/credentials/098b574700d74432a9fb997f638bc2d2/",
        caption: "Professional Certificate, Python Data Science",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id: 28,
        org: "ibm",
        url: "https://credentials.edx.org/credentials/250f5dafb0de40efbbf013a5b3c9f029/",
        caption: "Professional Certificate, Data Science Foundations",
        category: ["datascience", "python", "sql", "ibmcloud", "ibm"]
    },
    {
        id: 27,
        org: "ibm",
        url: "https://courses.edx.org/certificates/8b5ac79a2f7f4c2aa4321aaaafd63978",
        caption: "Python Basics for Data Science",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id: 26,
        org: "ibm",
        url: "https://courses.edx.org/certificates/3532cb2223064903a9d17f8dd42689ea",
        caption: "Introduction to Data Science",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id: 25,
        org: "ibm",
        url: "https://courses.edx.org/certificates/3fe7e50b826e43819967cb9e396d1c60",
        caption: "Data Science Tools",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id: 24,
        org: "ibm",
        url: "https://courses.edx.org/certificates/1ff7eeb05c2b4a2cbd0cdd6e0a53eadd",
        caption: "SQL for Data Science",
        category: ["datascience", "python", "sql", "ibmcloud", "ibm"]
    },
    {
        id: 23,
        org: "ibm",
        url: "https://courses.edx.org/certificates/cb8b4838ab134544a3fbe50c1da0f51b",
        caption: "Analyzing Data with Python",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id: 22,
        org: "ibm",
        url: "https://courses.edx.org/certificates/267aa2a9f531413fab0dcbfab74bcc57",
        caption: "The Data Science Method",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id: 21,
        org: "ibm",
        url: "https://courses.edx.org/certificates/a3a26fdc1396427ba447ee7a0ccb4575",
        caption: "Visualizing Data with Python",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id: 20,
        org: "ibm",
        url: "https://courses.edx.org/certificates/954133c3694644c5ba72f8bf2a6de822",
        caption: "Machine Learning with Python",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id: 19,
        org: "ibm",
        url: "https://courses.edx.org/certificates/2f099642be0341ee8eb6ddfc9826d8ed",
        caption: "Data Science/Machine Learning Capstone Project",
        category: ["datascience", "python", "ibmcloud", "ibm"]
    },
    {
        id: 18,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/full-stack",
        caption: "Full Stack Web Developer",
        category: ["fullstack", "javascript", "freecodecamp"]
    },
    {
        id: 17,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/responsive-web-design",
        caption: "Responsive Web Design",
        category: ["fullstack", "freecodecamp"]
    },
    {
        id: 16,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/javascript-algorithms-and-data-structures",
        caption: "JS Algorithms and Data Structures",
        category: ["fullstack", "javascript", "freecodecamp"]
    },
    {
        id: 15,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/front-end-libraries",
        caption: "Front End Libraries",
        category: ["fullstack", "javascript", "freecodecamp"]
    },
    {
        id: 14,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/data-visualization",
        caption: "Data Visualization",
        category: ["fullstack", "javascript", "freecodecamp"]
    },
    {
        id: 13,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/apis-and-microservices",
        caption: "APIs and Microservices",
        category: ["fullstack", "javascript", "freecodecamp"]
    },
    {
        id: 12,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/quality-assurance-v7",
        caption: "Quality Assuarance",
        category: ["fullstack", "javascript", "python", "freecodecamp"]
    },
    {
        id: 11,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/information-security-v7",
        caption: "Information Security",
        category: ["fullstack", "javascript", "python", "freecodecamp"]
    },
    {
        id: 10,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/scientific-computing-with-python-v7",
        caption: "Scientific Computing with Python",
        category: ["python", "freecodecamp"]
    },
    {
        id: 9,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/data-analysis-with-python-v7",
        caption: "Data Analysis with Python",
        category: ["datascience", "python", "freecodecamp"]
    },
    {
        id: 8,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/machine-learning-with-python-v7",
        caption: "Machine Learning with Python",
        category: ["datascience", "python", "freecodecamp"]
    },
    {
        id: 7,
        org: "freecodecamp",
        url: "https://www.freecodecamp.org/certification/fccc534cca9-a8ea-423c-ac32-350f031d7082/information-security-and-quality-assurance",
        caption: "Information Security and Quality Assurance",
        category: ["fullstack", "javascript", "freecodecamp"]
    },
    {
        id: 6,
        org: "google",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/F38Q8LMHV5TL",
        caption: "From Data to Insights with Google Cloud Platform",
        category: ["datascience", "bigquery", "sql", "googlecloud", "google"]
    },
    {
        id: 5,
        org: "google",
        url: "https://www.coursera.org/account/accomplishments/certificate/L2TV2QZNRXVA",
        caption: "Exploring/Preparing your Data with BigQuery",
        category: ["datascience", "bigquery", "sql", "googlecloud", "google"]
    },
    {
        id: 4,
        org: "google",
        url: "https://www.coursera.org/account/accomplishments/certificate/ZTPBMTNFLWEY",
        caption: "Creating New BgiQuery Datasets/Visualizing Insights",
        category: ["datascience", "bigquery", "sql", "googlecloud", "google"]
    },
    {
        id: 3,
        org: "google",
        url: "https://www.coursera.org/account/accomplishments/certificate/GJ5VKF2KYNA9",
        caption: "Achieving Advanced Insights with BigQuery",
        category: ["datascience", "bigquery", "sql", "googlecloud", "google"]
    },
    {
        id: 2,
        org: "google",
        url: "https://www.coursera.org/account/accomplishments/certificate/232H7CKCYK7W",
        caption: "Applying Machine Learning to your Data with GCP",
        category: ["datascience", "bigquery", "googlecloud", "google"]
    },
    {
        id: 1,
        org: "google",
        url: "https://www.coursera.org/account/accomplishments/certificate/RB5TLSQR7MAH",
        caption: "Fundamentals for Azure Pro.: Core Infrastructure",
        category: ["googlecloud", "google"]
    }
]

export default { project_filters, projects, skills, certificate_filters, org_filters, certificates }