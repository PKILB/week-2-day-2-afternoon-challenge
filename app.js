let packages = [
    {
        priorityLevel: 'same-day',
        to: 'Boone',
        trackingNumber: '60 lbs',
        isFragile: false,
        hasPackage: true,
    },
    {
        priorityLevel: 'free',
        to: 'Harold',
        trackingNumber: '75 lbs',
        isFragile: true,
        hasPackage: true,
    },
    {
        priorityLevel: 'free',
        to: 'Nehemiah',
        trackingNumber: '20 lbs',
        isFragile: false,
        hasPackage: true,
    },
    {
        priorityLevel: 'free',
        to: 'Terry',
        trackingNumber: '100 lbs',
        isFragile: true,
        hasPackage: true,
    }
]

function drawPackages(packages) {
    let packagesElement = document.getElementById('packages')
    let packagesLineup = ''

    Array.forEach(package => {
        packageLineup += `<span title="${package.to}">${package.trackingNumber}/<span>`
    })

    packagesElement.innerHTML = packageLineup
}






drawPackages(packages)