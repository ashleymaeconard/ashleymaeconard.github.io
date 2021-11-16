---
layout: archive
title: "Publications & Software"
permalink: /publications/
author_profile: true
---

The following sections highlight my publications and software. The software I have developed are a mix of open source (PhD, Google) and privately owned (MIT, Eli Lilly, Microsoft, and DePauw).

## *Publications*
---
### Published or under review
Co-ﬁrst author:* , corresponding author: ‡ .
#### 2021

- M. Ray* , **A. Conard**\* , E. Larschan‡. The CLAMP transcription factor regulates sex-speciﬁc splicing in the Drosophila early embryo. *Nature Communications*. (Under review).

- N. D’Silva* , K. McCullar* , **A. Conard**, T. Blackwater, R. Azanchi, U. Heberlein, E. Larschan, K. Kaun‡. Neuromolecular and behavioral adaptation associated with alcohol deprivation. *Genetics*. (Under review).

- A. M. Bronikowski, R. P. Meisel, P. R. Biga, J. R. Walters, J. E. Mank, E. Larschan, G. S. Wilkinson, N. Valenzuela, **A. Conard**, J. P. de Magalhaes, J. Duan, A. E. Elias, T. Gamble, R. M. Graze, K. E. Gribble, J. A. Kreiling, and N. C. Riddle‡. Sex-speciﬁc aging in animals: Perspective and future directions. *Aging Cell* (Under review).

#### 2020

- **A. Conard**‡ , N. Goodman, Y. Hu, N. Perrimon, R. Singh, C. Lawrence‡, E. Larschan‡. TIMEOR: a web-based tool to uncover regulatory mechanisms from temporal and multi-omics data. *NAR Web Server Issue*.

- M. Tsarli, **A. Conard**, E. Larschan‡. The Drosophila CLAMP protein regulates neurogenesis in the optic lobe. *Genetics*. (Under review).

#### 2019

- **A. Conard**‡ , B. Raphael ‡ . Identiﬁcation of subclonal drivers and copy-number variants from bulk and single-cell DNA sequencing of tumors. *Brown University Department of Computer Science*.

#### 2016 
- Cuypers, A. Jacobsen, B. Siranosian, K. Schwahn, **A. Conard**, N. Aben, M. Hassan, N. Fatima, S. Hermans, M. Woghiren, P. Meysman, F. Rahman, A. Jigisha. Highlights from the ISCB Student Council Symposia in2016. F1000Research. 2016, 5(ISCB CommJ)

#### 2015 
- **A. Conard**, S. Dodson, J. Kepner‡, D. Ricke‡. Using a Big Data Database to Identify Pathogens in ProteinData Space, arXiv:1501.05546


### Written or submitted

4 promising papers coming spring 2022. 

Topics:
- multi-omics modeling
- interpretable machine learning (collaboration with Microsoft)
- tool to compare multi-omics datasets
- math lessons in genomics and molecular biology (book)

### Ongoing projects

5 promising projects on track for publication in 2022.

Topics:
- multi-omics data visulization
- chronic disease modeling (collaboration with Microsoft)
- complex multi-omics data modeling
- heat stress effects on biological system
- RNA-protein interactions in biological system 



## *Software*
---
### Spring 2021 

*time2splice* [link] 
- time2splice is a method to ﬁnd temporal and sex-speciﬁc alternative splicing from multi-omics data.
- Implementation details: Bash, Python, R 

### Fall 2020 
*TIMEOR (Trajectory Inference and Mechanism Exploration using Omics data in R)* [link] 
- TIMEOR is a web server and Dockerized command line tool to identify gene regulatory networks and assign mechanism from temporal and multi-omics data. 
- Implementation details: Bash, Python, R, RShiny 

### Summer 2014 
*PRIPS (Pathogen Rapid ID from Protein Sequences)*  (property of MIT Lincoln Laboratory) 
- A fast protein analysis algorithm, using Dynamic Distributed Dimensional Data Model (D4M - by Dr. Jeremy Kepner), merging triplestore/NoSQL databases (Accumulo) with associative and distributed array representations of proteomic sequences for fast genomic big data analysis using sparse linear algebra. Our approach efﬁciently extracts statistical patterns to relate protein sequences, with the end goal of rapidly identiﬁng novel pathogens. 
- Implementation details: Matlab 

### Spring 2014 

*Chemical Inventory Database* [description link], (property of DePauw [login link]) 
- Web-based inventory management system used in many academic departments, mainly chemistry. Users log inanduse a phone to scanbarcodes for automatic itementry. The applicationuses the Parse Platform as a relational database to house inventory for DePauw University. This system has been updatedby the maintainer Dr. DaveRoberts. 
- Implementation details: HTML, CSS, Parse Platform 

### 2013, 2014 
*Arduino-CSSI (Computer Science Summer Institute at Google)* [link] 
- Set of Arduino workshop modules and Fritzing diagrams to teach students how to programas part of the Google Computer Science Summer Institute (CSSI). 
- Implementation details: C 

### Summer 2012 
*Instrument Control* (property of Eli Lilly and Elanco) 
- Online internal system to monitor product batch data. Batch data is extracted fromEli Lilly’s Data Mart and Data Warehouse databases and then visualized for the researcher (such as potency, and solubility ﬂuctuations). This system continues tobe run automatically daily, enabling employees to easily inspect and verify internal processes, saving signiﬁcant money and time. 
- Implementation details: SQL, Discoverant, and Business objects

<!--- {% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %} --->
