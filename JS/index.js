var allTaskList = document.getElementById('allTask')
//To add task
document.getElementById('hitButton').addEventListener('click', function (e) {
    e.preventDefault()
    var divFor = document.createElement('div')
    divFor.style.border = '2px solid #80808052'
    divFor.style.minHeight = '40px'
    divFor.style.marginBottom = '10px'
    divFor.style.padding = "5px 15px"

    var spanText = document.createElement('span')
    spanText.style.float = 'left'
    spanText.textContent = document.getElementById('taskName').value

    var spanIcon = document.createElement('span')
    spanIcon.style.cssText = "float:right;cursor:pointer"

    var fIcon = document.createElement('i')
    fIcon.className = 'editIcon'
    fIcon.textContent = `Edit`
    fIcon.style.cssText = "color:blue;margin-right:10px"
    var sIcon = document.createElement('i')
    sIcon.className = 'deleteIcon'
    sIcon.textContent = `Delete`
    sIcon.style.cssText = "color:red;"

    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.className = 'form-control'
    input.style.display = 'none'

    spanIcon.appendChild(fIcon)
    spanIcon.appendChild(sIcon)

    divFor.appendChild(spanText)
    divFor.appendChild(spanIcon)
    divFor.appendChild(input)

    if (document.getElementById('taskName').value !== '') {
        allTaskList.appendChild(divFor)
        document.getElementById('taskName').value = ''
    }
    console.log(allTaskList)
})
//To update or delete task
allTaskList.addEventListener('click', function (e) {
    if (e.target.classList[0] === 'editIcon') {
        var toEdit = e.target.parentNode
        toEdit.style.display = 'none'

        var taskName = toEdit.previousElementSibling
        taskName.style.display = 'none'

        var input = toEdit.nextElementSibling
        input.style.display = 'block'
        input.value = taskName.textContent

        input.addEventListener('blur', function (e) {
            if (input.value !== '') {
                toEdit.style.display = 'block'
                taskName.textContent = input.value
                taskName.style.display = 'block'
                input.style.display = 'none'
            }
        })
    }
    else if (e.target.classList[0] === 'deleteIcon') {
        var divToDelete = e.target.parentNode.parentNode
        divToDelete.parentNode.removeChild(divToDelete)
    }
})
//To search task
document.getElementById('taskNameFilter').addEventListener('keyup', function (e) {
    e.preventDefault()
    Array.from(allTaskList.getElementsByTagName('div')).forEach(function (row) {
        if (row.firstElementChild.textContent.includes(taskNameFilter.value)) {
            row.style.display = 'block'
        } else {
            row.style.display = 'none'
        }
    })
})

