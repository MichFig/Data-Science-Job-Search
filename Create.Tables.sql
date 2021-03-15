CREATE TABLE Training (
    Enrollee_Id Int NOT NULL,
    City Char(10) NOT NULL,
    City_Development Int NOT NULL,
    Gender Char(6) NOT NULL,
    Relevent_Experience VarChar(30)   NOT NULL,
    Enrolled_University VarChar(20)   NOT NULL,
    Education_Level VarChar(15)   NOT NULL,
    Major_Discipline VarChar(20)   NOT NULL,
    Experience VarChar(5)   NOT NULL,
    Company_Size VarChar(10)   NOT NULL,
    Company_Type VarChar(20)   NOT NULL,
    Last_New_Job Int NOT NULL,
    Training_Hours Int NOT NULL,
    CONSTRAINT pk_Training PRIMARY KEY (
        Enrollee_Id
     )
);

CREATE TABLE Testing (
    Enrollee_Id Int NOT NULL,
    City Char(10) NOT NULL,
    City_Development Int NOT NULL,
    Gender Char(6) NOT NULL,
    Relevent_Experience VarChar(30)   NOT NULL,
    Enrolled_University VarChar(20)   NOT NULL,
    Education_Level VarChar(15)   NOT NULL,
    Major_Discipline VarChar(20)   NOT NULL,
    Experience VarChar(5)   NOT NULL,
    Company_Size VarChar(10)   NOT NULL,
    Company_Type VarChar(20)   NOT NULL,
    Last_New_Job Int NOT NULL,
    Training_Hours Int NOT NULL,
    Target Int NOT NULL,
    CONSTRAINT pk_Testing PRIMARY KEY (
        Enrollee_Id
     )
);

ALTER TABLE Training ADD CONSTRAINT fk_Training_Enrollee_Id FOREIGN KEY(Enrollee_Id)
REFERENCES Testing (Enrollee_Id);

