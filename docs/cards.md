# Cards

## Basic card with image button 

<div class="grid cards" markdown>
-   :material-linux:{ .lg .middle } __Introduction to Linux__

    ---

    Learn to deploy applications on AWS cloud infrastructure

    [:octicons-arrow-right-24: Start Workshop](./aws-workshop.md){ .md-button }

</div>


## Cards with Custom Image


<div class="grid cards" markdown>

-   ![AWS Logo](images/aws-logo.png){ width="100" }

    __AWS Workshop__

    ---

    Deploy scalable applications on AWS with hands-on labs

    [:octicons-arrow-right-24: Start Workshop](./aws/){ .md-button .md-button--primary }

</div>

## Multiple Cards in a Grid

<div class="grid cards" markdown>

-   ![AWS](images/aws.png){ width="80" }
    
    __AWS Workshop__
    
    ---
    
    Cloud infrastructure and deployment
    
    [Start :octicons-arrow-right-24:](./aws/){ .md-button }

-   ![Azure](images/azure.png){ width="80" }
    
    __Azure Workshop__
    
    ---
    
    Microsoft cloud services hands-on
    
    [Start :octicons-arrow-right-24:](./azure/){ .md-button }

-   ![GCP](images/google-cloud.png){ width="80" }
    
    __GCP Workshop__
    
    ---
    
    Google Cloud Platform essentials
    
    [Start :octicons-arrow-right-24:](./gcp/){ .md-button }

</div>

## Customizing Card Grid Layout

Control columns with CSS classes:

<div class="grid cards" markdown>

- Content here

</div>

By default, cards are responsive. You can also use grid with inline styles for fixed columns:

```markdown
<div class="grid" style="grid-template-columns: repeat(2, 1fr);" markdown>
```
