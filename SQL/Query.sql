--  a. Who Profiles as the most common enrollees in the training program based on GENDER?
-i Gender (MALE)

SELECT 
enrollee_id,
city_development_index,
relevent_experience,
enrolled_university,
education_level,
major_discipline,
experience,
company_size,
company_type,
last_new_job,
training_hours,
target

FROM dsjs
WHERE dsjs.gender = 'Male';


_____________________________________________________________________________________________________________________
SELECT 
	Count(gender)
from 
	dsjs
WHERE dsjs.gender = 'Male';

______________________________________________________________________________________________________________________

-i Gender (FEMALE)
SELECT 
enrollee_id,
city_development_index,
relevent_experience,
enrolled_university,
education_level,
major_discipline,
experience,
company_size,
company_type,
last_new_job,
training_hours,
target

from dsjs
WHERE dsjs.gender = 'Female';

____________________________________________________________________
SELECT 
	Count(gender)
from 
	dsjs
WHERE dsjs.gender = 'Female';

_________________________________________________________________________
-- ii Educational Background--  (Graduate)
SELECT 
enrollee_id,
city_development_index,
relevent_experience,
enrolled_university,
education_level,
major_discipline,
experience,
company_size,
company_type,
last_new_job,
training_hours,
target

FROM dsjs
WHERE dsjs.education_level = 'Graduate';
_________________________________________________________________________________________________________________________
SELECT 
	Count(education_level)
from 
	dsjs
WHERE dsjs.education_level = 'Graduate';
_________________________________________________________________________________________________________________________
-- ii Educational Background--  (Masters)
SELECT 
enrollee_id,
city_development_index,
relevent_experience,
enrolled_university,
education_level,
major_discipline,
experience,
company_size,
company_type,
last_new_job,
training_hours,
target

FROM dsjs
WHERE dsjs.education_level = 'Masters';

_________________________________________________________________________________________________________________________
SELECT 
	Count(education_level)
from 
	dsjs
WHERE dsjs.education_level = 'Masters';
________________________________________________________________________________________________________________________
-- ii Educational Background--  (Phd)
SELECT 
enrollee_id,
city_development_index,
relevent_experience,
enrolled_university,
education_level,
major_discipline,
experience,
company_size,
company_type,
last_new_job,
training_hours,
target

FROM dsjs
WHERE dsjs.education_level = 'Phd';
_____________________________________________________________________________________________________________________________
SELECT 
	Count(education_level)
from 
	dsjs
WHERE dsjs.education_level = 'Phd';
________________________________________________
-- iii Job Experience (Relevent)
SELECT 
enrollee_id,
city_development_index,
relevent_experience,
enrolled_university,
education_level,
major_discipline,
experience,
company_size,
company_type,
last_new_job,
training_hours,
target

FROM dsjs
WHERE dsjs.relevent_experience = 'Has relevent experience';
________________________________________________________________________________________________________________________
SELECT 
	Count(relevent_experience)
from 
	dsjs
WHERE dsjs.relevent_experience = 'Has relevent experience';
_______________________________________________________________________________________________________________________
-- iii Job Experience (Not Relevent)
SELECT 
enrollee_id,
city_development_index,
relevent_experience,
enrolled_university,
education_level,
major_discipline,
experience,
company_size,
company_type,
last_new_job,
training_hours,
target

FROM dsjs
WHERE dsjs.relevent_experience = 'No relevent experience';
_____________________________________________________________________________________________________
SELECT 
	Count(relevent_experience)
from 
	dsjs
WHERE dsjs.relevent_experience = 'No relevent experience';
____________________________________________________________________________________________________
SELECT
relevent_experience,
major_discipline,
experience

from graduate
WHERE relevent_experience ='Has relevent experience' and major_discipline ='STEM' and experience ='10';
______________________________________________________________________________________________________

SELECT 
enrollee_id,
city_development_index,
gender,
relevent_experience,
enrolled_university,
education_level,
major_discipline,
experience,
company_size,
company_type,
last_new_job,
training_hours,
target

FROM graduate
WHERE graduate.target ='0' and graduate.gender ='Male';
