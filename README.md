<p style="text-align: center;"><strong>Project Overview</strong></p>
<p><strong>Team Members: </strong>Brian Bates, Michelle Fegatelli, Tanner Pedretti, Jah, Andr&eacute;s Solano</p>
<p><strong>Dataset Used:</strong> &ldquo;HR Analytics: Job Change of Data Scientists&rdquo;</p>
<ul>
<li>Link: <a href="https://www.kaggle.com/arashnic/hr-analytics-job-change-of-data-scientists" target="_blank" rel="noopener">https://www.kaggle.com/arashnic/hr-analytics-job-change-of-data-scientists</a></li>
</ul>
<ul>
<li>CSV with data on 9000+ enrollees of a <strong>Data Science training program</strong> (such as ours)</li>
<li>Data included info on an enrollee&rsquo;s:</li>
<ul>
<li><strong>Professional Experience</strong></li>
<li><strong>Educational Background</strong></li>
<li><strong>Interest in Job Change</strong></li>
<li><strong>Training Hours Spent on the Program</strong></li>
</ul>
</ul>
<p><strong>Project Goal:</strong></p>
<ul>
<li>Create two Dashboard pages with multiple charts that will provide insights to a prospective enrollee<strong> (employee) </strong>as well as a prospective/current <strong>employer.</strong></li>
</ul>
<p><strong>Insights:</strong></p>
<p><strong>For a Prospective enrollee (Employee)...</strong></p>
<ul>
<ul>
<ul>
<li>Based on your professional experience and educational background, how do YOU stack up against other employees?</li>
</ul>
</ul>
</ul>
<p><strong>For a Prospective Employer...</strong></p>
<ul>
<ul>
<li>How does a particular enrollee stack up against the broader field of past enrollees?</li>
<li>Demographics/Experience level for each enrollee</li>
</ul>
</ul>
<p style="text-align: center;"><strong>Project Scope</strong></p>
<ol>
<li><strong>&ldquo;Experience Level&rdquo; Aggregate Score</strong></li>
<ol>
<li><strong>&ldquo;Experience Level&rdquo; is derived from the SUM of:</strong></li>
<ol>
<li><strong>Major Discipline (MULTIPLIED BY</strong><strong>*) Years of Experience Score</strong></li>
<li><strong>Training Hours Score</strong></li>
</ol>
<li><strong>Major Discipline &amp; Years of Experience Score</strong></li>
<ol>
<li>Makes up 80% of Score for Relevant Experience = &ldquo;YES&rdquo;</li>
<li>Makes up 20% of Score for Relevant Experience = &ldquo;NO&rdquo;</li>
</ol>
<li><strong>Training Hours Score</strong></li>
<ol>
<li>Makes up 20% of Score for Relevant Experience = &ldquo;YES&rdquo;</li>
<li>Makes up 80% of Score for Relevant Experience = &ldquo;NO&rdquo;</li>
</ol>
<li>Example Candidate &amp; Score:</li>
<ol>
<li>Info</li>
<ol>
<li><strong>Relevant Experience</strong> = &ldquo;YES&rdquo;</li>
<li><strong>Major Discipline</strong> = &ldquo;STEM&rdquo;</li>
<li><strong>Years of Experience</strong> = &ldquo;11-20&rdquo;</li>
<li><strong>Training Hours</strong> = 41-60</li>
</ol>
<li>Experience Score</li>
<ol>
<li>[ (STEM) * (11-20) ] + (41-60)</li>
<li>[ (4) * (16) ] + (10)</li>
<li><strong>64 + 10 = 74/100</strong></li>
</ol>
</ol>
</ol>
</ol>
<div>
<table>
<tbody>
<tr>
<td><strong>Major Discipline</strong></td>
<td><strong>STEM</strong></td>
<td><strong>Business</strong></td>
<td><strong>Other</strong></td>
</tr>
<tr>
<td><strong>Multiplier</strong></td>
<td>4x</td>
<td>2x</td>
<td>1x</td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><strong>Years of Experience</strong></td>
<td><strong>Score for Relevant Exp. = &ldquo;YES&rdquo;</strong></td>
<td><strong>Score for Relevant Exp. = &ldquo;NO&rdquo;</strong></td>
</tr>
<tr>
<td><strong>&lt;1</strong></td>
<td>2</td>
<td>0.5</td>
</tr>
<tr>
<td><strong>1-5</strong></td>
<td>4</td>
<td>1</td>
</tr>
<tr>
<td><strong>6-10</strong></td>
<td>8</td>
<td>2</td>
</tr>
<tr>
<td><strong>11-20</strong></td>
<td>16</td>
<td>4</td>
</tr>
<tr>
<td><strong>&gt;20</strong></td>
<td>20</td>
<td>5</td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><strong># of Training Hours</strong></td>
<td><strong>Score for Relevant Exp. = &ldquo;YES&rdquo;</strong></td>
<td><strong>Score for Relevant Exp. = &ldquo;NO&rdquo;</strong></td>
</tr>
<tr>
<td><strong>&lt;20</strong></td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td><strong>20-40</strong></td>
<td>5</td>
<td>20</td>
</tr>
<tr>
<td><strong>41-60</strong></td>
<td>10</td>
<td>40</td>
</tr>
<tr>
<td><strong>61-80</strong></td>
<td>15</td>
<td>60</td>
</tr>
<tr>
<td><strong>&gt;80</strong></td>
<td>20</td>
<td>80</td>
</tr>
</tbody>
</table>
</div>
<p><strong>Dashboard Page</strong></p>
<ol>
<li>SELECT:</li>
<ol>
<li>Employee Perspective</li>
<li>Employer Perspective</li>
</ol>
</ol>
<ol>
<li>FUNCTIONALITY:</li>
<ol>
<li>EMPLOYEE</li>
<ol>
<li>&ldquo;Input your experience to see how you compare with other people that have taken this class&rdquo;</li>
<ol>
<li>INPUTS</li>
<ol>
<li>Relevant Experience = [Y/N]</li>
<li>Major Discipline = [STEM, Business, Other]</li>
<li>Years of Working Experience = [&lt;1, 1-5, 6-10, 11-20, &gt;20]</li>
<li>Training Hours Spent in the program = [&lt;20, 20-40, 41-60, 61-80, &gt;80]</li>
</ol>
<li>OUTPUTS</li>
<ol>
<li>Relevant Experience Aggregate Score</li>
<li>Count of people at each Score datapoint</li>
</ol>
</ol>
</ol>
<li>EMPLOYER</li>
<ol>
<li>INPUTS</li>
<ol>
<li>Enrollee ID</li>
</ol>
<li>OUTPUTS:</li>
<ol>
<li>GRAPHS</li>
<ol>
<li>One for each datapoint in the dataset. Stacked by enrollees who have stated they WILL be looking for a new job v/s NOT looking for a new job</li>
<li>Shows where each enrollee falls within the broader pool of enrollees</li>
<li>Includes</li>
<ol>
<li>Gender</li>
<li>Educational Background</li>
<li>Job Experience</li>
<li>Training Hours Spent on the Program</li>
</ol>
</ol>
</ol>
</ol>
</ol>
</ol>
