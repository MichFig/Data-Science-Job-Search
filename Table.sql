CREATE TABLE DSJS (
    enrollee_id INT   NOT NULL,
    city_development_index VARCHAR(30)   NOT NULL,
    gender VARCHAR(30)   NOT NULL,
    relevent_experience VARCHAR(30)   NOT NULL,
    enrolled_university VARCHAR(30)   NOT NULL,
    education_level VARCHAR(30)   NOT NULL,
    major_discipline VARCHAR(30)   NOT NULL,
    experience VARCHAR(30)   NOT NULL,
    company_size VARCHAR(30)   NOT NULL,
    company_type VARCHAR(30)   NOT NULL,
    last_new_job VARCHAR(30)   NOT NULL,
    training_hours INT   NOT NULL,
    target INT   NULL
    
);

CREATE TABLE Graduate (
    enrollee_id INT   NOT NULL,
    city_development_index VARCHAR(30)   NOT NULL,
    gender VARCHAR(30)   NOT NULL,
    relevent_experience VARCHAR(30)   NOT NULL,
    enrolled_university VARCHAR(30)   NOT NULL,
    education_level VARCHAR(30)   NOT NULL,
    major_discipline VARCHAR(30)   NOT NULL,
    experience VARCHAR(30)   NOT NULL,
    company_size VARCHAR(30)   NOT NULL,
    company_type VARCHAR(30)   NOT NULL,
    last_new_job VARCHAR(30)   NOT NULL,
    training_hours INT   NOT NULL,
    target INT  NULL
);

CREATE TABLE Masters (
    enrollee_id INT   NOT NULL,
    city_development_index VARCHAR(30)   NOT NULL,
    gender VARCHAR(30)   NOT NULL,
    relevent_experience VARCHAR(30)   NOT NULL,
    enrolled_university VARCHAR(30)   NOT NULL,
    education_level VARCHAR(30)   NOT NULL,
    major_discipline VARCHAR(30)   NOT NULL,
    experience VARCHAR(30)   NOT NULL,
    company_size VARCHAR(30)   NOT NULL,
    company_type VARCHAR(30)   NOT NULL,
    last_new_job VARCHAR(30)   NOT NULL,
    training_hours INT   NOT NULL,
    target INT  NULL    
);

CREATE TABLE Phd (
    enrollee_id INT   NOT NULL,
    city_development_index VARCHAR(30)   NOT NULL,
    gender VARCHAR(30)   NOT NULL,
    relevent_experience VARCHAR(30)   NOT NULL,
    enrolled_university VARCHAR(30)   NOT NULL,
    education_level VARCHAR(30)   NOT NULL,
    major_discipline VARCHAR(30)   NOT NULL,
    experience VARCHAR(30)   NOT NULL,
    company_size VARCHAR(30)   NOT NULL,
    company_type VARCHAR(30)   NOT NULL,
    last_new_job VARCHAR(30)   NOT NULL,
    training_hours INT   NOT NULL,
    target INT   NULL
);

Select *
from dsjs

select *
from graduate

select *
from masters

select * 
from phd