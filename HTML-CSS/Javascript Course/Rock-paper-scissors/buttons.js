/*
To use this function, insert next to an onclick function and input the element ID as an argument. 
When clicking the element, the javascript will add the class "is-toggled" which will add new CSS properties to the elemenent to clearly visually demarcate.
*/

function toggleButton(id)
{
    const buttonName = document.getElementById(`${id}`);
    if (!buttonName.classList.contains('is-toggled'))
    {
        buttonName.classList.add('is-toggled');
    }
    else
    {
        buttonName.classList.remove('is-toggled');
    }
}