// ==================== DATA ====================

var allData = [];

// --- 25 original entries (matching the screenshot) ---
var originalEntries = [
    { module: 'User profile', subModule: 'User details', empName: '-', title: 'User information updated', description: 'User information updated for ayaz.maniar@petpooja.com: - User Name chan...', payrollDate: '-', action: 'Update', actionBy: 'Ayaz', logDate: '13-02-2026', logTime: '02:39 PM', actionFrom: 'Web App' },
    { module: 'User Management', subModule: 'Manage Users', empName: '-', title: 'User deleted', description: 'User dhaval nagar deleted by Nishil Shah', payrollDate: '-', action: 'Delete', actionBy: 'Nishil Shah', logDate: '13-02-2026', logTime: '11:38 AM', actionFrom: 'Web App' },
    { module: 'User Management', subModule: 'Manage Users', empName: '-', title: 'User deleted', description: 'User Dhaval nagar deleted by Developer Accounts 1', payrollDate: '-', action: 'Delete', actionBy: 'Developer Accounts 1', logDate: '13-02-2026', logTime: '11:43 AM', actionFrom: 'Web App' },
    { module: 'User Management', subModule: 'Manage Users', empName: '-', title: 'User created', description: 'User Dhaval nagar created by Nishil Shah', payrollDate: '-', action: 'Insert', actionBy: 'Nishil Shah', logDate: '13-02-2026', logTime: '11:39 AM', actionFrom: 'Web App' },
    { module: 'User Management', subModule: 'Manage Users', empName: '-', title: 'User created', description: 'User dhaval nagar created by Nishil Shah', payrollDate: '-', action: 'Insert', actionBy: 'Nishil Shah', logDate: '13-02-2026', logTime: '11:37 AM', actionFrom: 'Web App' },
    { module: 'User Management', subModule: 'Manage Users', empName: '-', title: 'User created', description: 'User Dhaval Nagar created by Developer Accounts 1', payrollDate: '-', action: 'Insert', actionBy: 'Developer Accounts 1', logDate: '13-02-2026', logTime: '11:43 AM', actionFrom: 'Web App' },
    { module: 'User Management', subModule: 'Manage Users', empName: '-', title: 'User created', description: 'User Aditya kushwaha created by Developer Accounts 1', payrollDate: '-', action: 'Insert', actionBy: 'Developer Accounts 1', logDate: '13-02-2026', logTime: '11:45 AM', actionFrom: 'Web App' },
    { module: 'Settings page', subModule: 'Payroll Management', empName: '-', title: 'Salary compliance turned off', description: 'Salary compliance module turned off by Developer Accounts 1 on 2026-02-1...', payrollDate: '-', action: 'Update', actionBy: 'Developer Accounts 1', logDate: '13-02-2026', logTime: '02:18 PM', actionFrom: 'Web App' },
    { module: 'Monthly payroll', subModule: 'Salary compliance', empName: '-', title: 'Salary compliance turned off', description: 'Salary compliance module turned off by Developer Accounts 1 on 2026-02-1...', payrollDate: '-', action: 'Update', actionBy: 'Developer Accounts 1', logDate: '13-02-2026', logTime: '02:15 PM', actionFrom: 'Web App' },
    { module: 'User Management', subModule: 'Assign Rights', empName: '-', title: 'Rights updated', description: 'Rights assignment has been changed for dhaval nagar by Nishil Shah - Bron...', payrollDate: '-', action: 'Update', actionBy: 'Nishil Shah', logDate: '13-02-2026', logTime: '11:38 AM', actionFrom: 'Web App' },
    { module: 'User Management', subModule: 'Manage Users', empName: '-', title: 'User information updated', description: 'User email changed for rahul.patel@petpooja.com by Nishil Shah', payrollDate: '-', action: 'Update', actionBy: 'Nishil Shah', logDate: '13-02-2026', logTime: '11:30 AM', actionFrom: 'Web App' },
    { module: 'User Management', subModule: 'Manage Users', empName: '-', title: 'User created', description: 'User Rahul Patel created by Nishil Shah', payrollDate: '-', action: 'Insert', actionBy: 'Nishil Shah', logDate: '13-02-2026', logTime: '11:28 AM', actionFrom: 'Web App' },
    { module: 'Settings page', subModule: 'General Settings', empName: '-', title: 'Settings updated', description: 'Company logo updated by Developer Accounts 1', payrollDate: '-', action: 'Update', actionBy: 'Developer Accounts 1', logDate: '13-02-2026', logTime: '10:45 AM', actionFrom: 'Web App' },
    { module: 'User Management', subModule: 'Manage Users', empName: '-', title: 'User deleted', description: 'User Rahul Patel deleted by Developer Accounts 1', payrollDate: '-', action: 'Delete', actionBy: 'Developer Accounts 1', logDate: '13-02-2026', logTime: '10:30 AM', actionFrom: 'Web App' },
    { module: 'Monthly payroll', subModule: 'Payroll Processing', empName: '-', title: 'Payroll generated', description: 'Monthly payroll generated for January 2026 by Nishil Shah', payrollDate: '01-02-2026', action: 'Insert', actionBy: 'Nishil Shah', logDate: '13-02-2026', logTime: '10:15 AM', actionFrom: 'Web App' },
    { module: 'User Management', subModule: 'Assign Rights', empName: '-', title: 'Rights updated', description: 'Rights assignment has been changed for Rahul Patel by Developer Accounts 1', payrollDate: '-', action: 'Update', actionBy: 'Developer Accounts 1', logDate: '13-02-2026', logTime: '10:10 AM', actionFrom: 'Web App' },
    { module: 'Settings page', subModule: 'Payroll Management', empName: '-', title: 'TDS compliance turned on', description: 'TDS compliance module turned on by Developer Accounts 1 on 2026-02-13', payrollDate: '-', action: 'Update', actionBy: 'Developer Accounts 1', logDate: '13-02-2026', logTime: '10:05 AM', actionFrom: 'Web App' },
    { module: 'User profile', subModule: 'User details', empName: '-', title: 'User information updated', description: 'User information updated for nishil.shah@petpooja.com: - Phone Number ch...', payrollDate: '-', action: 'Update', actionBy: 'Nishil Shah', logDate: '13-02-2026', logTime: '09:55 AM', actionFrom: 'Web App' },
    { module: 'User Management', subModule: 'Manage Users', empName: '-', title: 'User created', description: 'User Priya Sharma created by Nishil Shah', payrollDate: '-', action: 'Insert', actionBy: 'Nishil Shah', logDate: '13-02-2026', logTime: '09:50 AM', actionFrom: 'Web App' },
    { module: 'User Management', subModule: 'Manage Users', empName: '-', title: 'User created', description: 'User Amit Verma created by Developer Accounts 1', payrollDate: '-', action: 'Insert', actionBy: 'Developer Accounts 1', logDate: '13-02-2026', logTime: '09:45 AM', actionFrom: 'Web App' },
    { module: 'Monthly payroll', subModule: 'Salary compliance', empName: '-', title: 'Salary compliance turned on', description: 'Salary compliance module turned on by Nishil Shah on 2026-02-13', payrollDate: '-', action: 'Update', actionBy: 'Nishil Shah', logDate: '13-02-2026', logTime: '09:40 AM', actionFrom: 'Web App' },
    { module: 'User Management', subModule: 'Assign Rights', empName: '-', title: 'Rights updated', description: 'Rights assignment has been changed for Priya Sharma by Nishil Shah - Adm...', payrollDate: '-', action: 'Update', actionBy: 'Nishil Shah', logDate: '13-02-2026', logTime: '09:35 AM', actionFrom: 'Web App' },
    { module: 'Settings page', subModule: 'General Settings', empName: '-', title: 'Settings updated', description: 'Company address updated by Developer Accounts 1', payrollDate: '-', action: 'Update', actionBy: 'Developer Accounts 1', logDate: '13-02-2026', logTime: '09:30 AM', actionFrom: 'Web App' },
    { module: 'User Management', subModule: 'Manage Users', empName: '-', title: 'User deleted', description: 'User Amit Verma deleted by Nishil Shah', payrollDate: '-', action: 'Delete', actionBy: 'Nishil Shah', logDate: '13-02-2026', logTime: '09:25 AM', actionFrom: 'Web App' },
    { module: 'User profile', subModule: 'User details', empName: '-', title: 'Password changed', description: 'Password changed for developer1@petpooja.com by Developer Accounts 1', payrollDate: '-', action: 'Update', actionBy: 'Developer Accounts 1', logDate: '13-02-2026', logTime: '09:20 AM', actionFrom: 'Web App' }
];

allData = allData.concat(originalEntries);

// --- Generate 200 more dummy entries ---
var modules = [
    { module: 'User Management', subModules: ['Manage Users', 'Assign Rights', 'User Roles', 'Permissions'] },
    { module: 'Settings page', subModules: ['General Settings', 'Payroll Management', 'Notification Settings', 'Email Templates'] },
    { module: 'Monthly payroll', subModules: ['Salary compliance', 'Payroll Processing', 'Tax Calculations', 'Bonus Management'] },
    { module: 'User profile', subModules: ['User details', 'Profile Photo', 'Security Settings'] },
    { module: 'Attendance', subModules: ['Mark Attendance', 'Leave Management', 'Shift Management', 'Overtime'] },
    { module: 'Reports', subModules: ['Payroll Reports', 'Attendance Reports', 'Tax Reports', 'Employee Reports'] },
    { module: 'Employee Management', subModules: ['Employee Details', 'Department Management', 'Designation', 'Documents'] },
    { module: 'Expense Management', subModules: ['Expense Claims', 'Reimbursement', 'Travel Expense', 'Approval Workflow'] }
];

var actionTypes = ['Update', 'Insert', 'Delete'];
var actionByList = ['Nishil Shah', 'Developer Accounts 1', 'Ayaz', 'Jinay Shah', 'Rahul Patel', 'Priya Sharma', 'Amit Verma', 'Sneha Kapoor', 'Vikram Singh', 'Pooja Mehta'];
var actionFromList = ['Web App', 'Web App', 'Web App', 'Mobile App', 'Web App', 'API'];
var empNames = ['-', '-', '-', 'Dhaval Nagar', 'Rahul Patel', 'Priya Sharma', 'Amit Verma', 'Sneha Kapoor', 'Vikram Singh', 'Pooja Mehta', '-', '-'];

var titles = {
    'Update': ['User information updated', 'Settings updated', 'Rights updated', 'Password changed', 'Salary compliance turned off', 'TDS compliance turned on', 'Profile updated', 'Email template modified', 'Shift timing updated', 'Leave policy updated', 'Tax slab updated', 'Department renamed', 'Designation updated', 'Expense approved'],
    'Insert': ['User created', 'Payroll generated', 'Report generated', 'Attendance marked', 'Leave applied', 'Shift assigned', 'Employee added', 'Department created', 'Expense submitted', 'Document uploaded'],
    'Delete': ['User deleted', 'Record removed', 'Shift deleted', 'Leave cancelled', 'Expense rejected', 'Document deleted', 'Template removed']
};

var descTemplates = {
    'Update': [
        'User information updated for {user}@petpooja.com: - User Name chan...',
        'Settings updated for payroll module by {actor}',
        'Rights assignment has been changed for {user} by {actor} - Role upd...',
        'Password changed for {user}@petpooja.com by {actor}',
        'Salary compliance module turned off by {actor} on 2026-02-1...',
        'TDS compliance module turned on by {actor} on 2026-02-13',
        'Profile photo updated for {user} by {actor}',
        'Email template modified by {actor} - Welcome email updated',
        'Shift timing updated for morning shift by {actor}',
        'Leave policy updated for casual leave by {actor}',
        'Tax slab updated for FY 2025-26 by {actor}',
        'Department {dept} renamed by {actor}',
        'Designation updated for {user} by {actor}',
        'Expense claim approved for {user} by {actor} - Amount: Rs. {amount}'
    ],
    'Insert': [
        'User {user} created by {actor}',
        'Monthly payroll generated for January 2026 by {actor}',
        'Attendance report generated for Feb 2026 by {actor}',
        'Attendance marked present for {user} by {actor}',
        'Leave applied for {user} from 15-02-2026 to 17-02-2026 by {actor}',
        'Shift assigned to {user} by {actor} - Morning Shift',
        'Employee {user} added to {dept} department by {actor}',
        'Department {dept} created by {actor}',
        'Expense claim submitted by {user} - Amount: Rs. {amount}',
        'Document uploaded for {user} by {actor} - Aadhar Card'
    ],
    'Delete': [
        'User {user} deleted by {actor}',
        'Payroll record removed for {user} by {actor}',
        'Shift deleted for {user} by {actor}',
        'Leave cancelled for {user} by {actor}',
        'Expense claim rejected for {user} by {actor}',
        'Document deleted for {user} by {actor} - Old PAN Card',
        'Email template removed by {actor}'
    ]
};

var dummyNames = ['Sanjay Kumar', 'Ravi Patel', 'Meena Joshi', 'Kiran Desai', 'Ankit Gupta', 'Neha Tiwari', 'Suresh Yadav', 'Manisha Reddy', 'Deepak Chauhan', 'Kavita Nair', 'Rohit Pandey', 'Swati Mishra', 'Arun Iyer', 'Shweta Agarwal', 'Gaurav Sinha', 'Divya Rao', 'Manoj Pillai', 'Anjali Saxena', 'Rajesh Thakur', 'Payal Jain'];
var departments = ['Engineering', 'HR', 'Finance', 'Marketing', 'Sales', 'Operations', 'Support', 'Design'];

function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomTime() {
    var hours = Math.floor(Math.random() * 12) + 1;
    var mins = Math.floor(Math.random() * 60);
    var ampm = Math.random() > 0.5 ? 'AM' : 'PM';
    return (hours < 10 ? '0' : '') + hours + ':' + (mins < 10 ? '0' : '') + mins + ' ' + ampm;
}

function randomDate() {
    var day = Math.floor(Math.random() * 13) + 1;
    return (day < 10 ? '0' : '') + day + '-02-2026';
}

for (var i = 0; i < 200; i++) {
    var modObj = randomFrom(modules);
    var action = randomFrom(actionTypes);
    var actor = randomFrom(actionByList);
    var user = randomFrom(dummyNames);
    var dept = randomFrom(departments);
    var amount = (Math.floor(Math.random() * 50) + 1) * 500;

    var titleList = titles[action];
    var descList = descTemplates[action];
    var titleText = randomFrom(titleList);
    var descText = randomFrom(descList)
        .replace(/\{user\}/g, user.toLowerCase().replace(' ', '.'))
        .replace(/\{actor\}/g, actor)
        .replace(/\{dept\}/g, dept)
        .replace(/\{amount\}/g, amount.toLocaleString());

    var payrollDate = (modObj.module === 'Monthly payroll' && Math.random() > 0.5) ? randomDate() : '-';

    allData.push({
        module: modObj.module,
        subModule: randomFrom(modObj.subModules),
        empName: randomFrom(empNames),
        title: titleText,
        description: descText,
        payrollDate: payrollDate,
        action: action,
        actionBy: actor,
        logDate: randomDate(),
        logTime: randomTime(),
        actionFrom: randomFrom(actionFromList)
    });
}

// Assign unique IDs for selection tracking
for (var k = 0; k < allData.length; k++) {
    allData[k]._id = k;
}

// ==================== STATE ====================
var currentPage = 1;
var pageSize = 10;
var sortKey = null;
var sortOrder = 'none';
var expandedRowIndex = -1;
var originalData = [];
var selectedIds = {};
var activeFilters = {};

// ==================== HELPERS ====================

function esc(text) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
}

function getActionClass(action) {
    switch (action) {
        case 'Update': return 'update';
        case 'Delete': return 'delete';
        case 'Insert': return 'insert';
        default: return '';
    }
}

function getColspan() {
    // Check if tablet columns are hidden (checkbox + data columns)
    if (window.innerWidth <= 1200) return 6;
    return 8;
}

// ==================== RENDER ====================

/**
* Render the current page of activity logs into the desktop table and mobile card list, update pagination and selection UI.
* @example
* renderTable()
* undefined
* @param {void} none - No arguments.
* @returns {void} No return value; updates DOM directly.
**/
function renderTable() {
    var data = getSortedData();
    var total = data.length;
    var totalPages = Math.ceil(total / pageSize);

    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    var start = (currentPage - 1) * pageSize;
    var end = Math.min(start + pageSize, total);
    var pageData = data.slice(start, end);

    // Update count in header
    document.getElementById('totalCount').textContent = total;

    // --- Render TABLE rows (desktop/tablet) ---
    var tbody = document.getElementById('tableBody');
    var tableHtml = '';
    for (var i = 0; i < pageData.length; i++) {
        var row = pageData[i];
        var globalIndex = start + i;
        var isExpanded = expandedRowIndex === globalIndex;

        tableHtml += '<tr class="data-row' + (isExpanded ? ' expanded' : '') + (selectedIds[row._id] ? ' selected' : '') + '" data-index="' + globalIndex + '" data-id="' + row._id + '">' +
            '<td class="col-checkbox-cell"><label class="checkbox-label"><input type="checkbox" class="row-checkbox" data-id="' + row._id + '"' + (selectedIds[row._id] ? ' checked' : '') + '><span class="checkbox-custom"></span></label></td>' +
            '<td>' + esc(row.module) + '</td>' +
            '<td class="hide-tablet">' + esc(row.subModule) + '</td>' +
            '<td>' +
                '<div class="activity-title">' + esc(row.title) + '</div>' +
                '<div class="activity-desc">' + esc(row.description) + '</div>' +
            '</td>' +
            '<td><span class="action-badge ' + getActionClass(row.action) + '">' + esc(row.action) + '</span></td>' +
            '<td>' + esc(row.actionBy) + '</td>' +
            '<td class="hide-tablet">' + esc(row.empName) + '</td>' +
            '<td>' + esc(row.logDate) + ', ' + esc(row.logTime) + '</td>' +
            '</tr>';

        // Expanded detail row
        if (isExpanded) {
            tableHtml += '<tr class="detail-row">' +
                '<td colspan="' + getColspan() + '">' +
                    '<div class="detail-compact">' +
                        '<div class="detail-fields">' +
                            '<div class="detail-field"><span class="detail-lbl">Module</span><span class="detail-val">' + esc(row.module) + '</span></div>' +
                            '<div class="detail-field"><span class="detail-lbl">Sub Module</span><span class="detail-val">' + esc(row.subModule) + '</span></div>' +
                            '<div class="detail-field"><span class="detail-lbl">Action</span><span class="detail-val"><span class="action-badge ' + getActionClass(row.action) + '">' + esc(row.action) + '</span></span></div>' +
                            '<div class="detail-field"><span class="detail-lbl">Action By</span><span class="detail-val">' + esc(row.actionBy) + '</span></div>' +
                            '<div class="detail-field"><span class="detail-lbl">Employee</span><span class="detail-val">' + esc(row.empName) + '</span></div>' +
                            '<div class="detail-field"><span class="detail-lbl">Payroll Date</span><span class="detail-val">' + esc(row.payrollDate) + '</span></div>' +
                            '<div class="detail-field"><span class="detail-lbl">Logged At</span><span class="detail-val">' + esc(row.logDate) + ', ' + esc(row.logTime) + '</span></div>' +
                            '<div class="detail-field"><span class="detail-lbl">Action From</span><span class="detail-val">' + esc(row.actionFrom) + '</span></div>' +
                        '</div>' +
                        '<div class="detail-desc-row"><span class="detail-lbl">Description</span><span class="detail-val">' + esc(row.description) + '</span></div>' +
                    '</div>' +
                '</td>' +
                '</tr>';
        }
    }
    tbody.innerHTML = tableHtml;

    // --- Render CARD list (mobile) ---
    var cardList = document.getElementById('cardList');
    var cardHtml = '';
    for (var j = 0; j < pageData.length; j++) {
        var r = pageData[j];
        cardHtml += '<div class="log-card' + (selectedIds[r._id] ? ' selected' : '') + '" data-id="' + r._id + '">' +
            '<div class="card-header-row">' +
                '<label class="checkbox-label card-checkbox"><input type="checkbox" class="row-checkbox" data-id="' + r._id + '"' + (selectedIds[r._id] ? ' checked' : '') + '><span class="checkbox-custom"></span></label>' +
                '<span class="card-module">' + esc(r.module) + '</span>' +
                '<span class="action-badge ' + getActionClass(r.action) + '">' + esc(r.action) + '</span>' +
            '</div>' +
            '<div class="card-title">' + esc(r.title) + '</div>' +
            '<div class="card-desc">' + esc(r.description) + '</div>' +
            '<div class="card-meta">' +
                '<span class="meta-item"><span class="meta-label">By:</span> ' + esc(r.actionBy) + '</span>' +
                '<span class="meta-item"><span class="meta-label">At:</span> ' + esc(r.logDate) + ', ' + esc(r.logTime) + '</span>' +
                (r.empName !== '-' ? '<span class="meta-item"><span class="meta-label">Emp:</span> ' + esc(r.empName) + '</span>' : '') +
                (r.payrollDate !== '-' ? '<span class="meta-item"><span class="meta-label">Payroll:</span> ' + esc(r.payrollDate) + '</span>' : '') +
            '</div>' +
            '</div>';
    }
    cardList.innerHTML = cardHtml;

    // --- Pagination ---
    var infoEl = document.getElementById('paginationInfo');
    if (total === 0) {
        infoEl.innerHTML = 'No results found';
    } else {
        infoEl.innerHTML = 'Showing <span class="pagination-highlight">' + (start + 1) + '</span> to <span class="pagination-highlight">' + end + '</span> of <span class="pagination-highlight">' + total + '</span> Results';
    }

    renderPagination(totalPages);

    // Update selection UI
    updateSelectionBar();
    updateSelectAllCheckbox(pageData);
}

// ==================== PAGINATION ====================

/**
* Render pagination controls into the '#pageButtons' DOM container based on the current page and total number of pages.
* @example
* renderPagination(5)
* undefined
* @param {number} totalPages - Total number of pages to render in the pagination control.
* @returns {void} Does not return a value; updates the DOM with pagination buttons.
*/
function renderPagination(totalPages) {
    var container = document.getElementById('pageButtons');
    var html = '';

    html += '<button class="page-btn prev-btn"' + (currentPage === 1 ? ' disabled' : '') + ' onclick="goToPage(' + (currentPage - 1) + ')">Previous</button>';

    var pages = getPageRange(currentPage, totalPages);
    for (var i = 0; i < pages.length; i++) {
        var p = pages[i];
        if (p === '...') {
            html += '<button class="page-btn" disabled>...</button>';
        } else {
            html += '<button class="page-btn page-number' + (p === currentPage ? ' active' : '') + '" onclick="goToPage(' + p + ')">' + p + '</button>';
        }
    }

    html += '<button class="page-btn next-btn"' + (currentPage === totalPages || totalPages === 0 ? ' disabled' : '') + ' onclick="goToPage(' + (currentPage + 1) + ')">Next</button>';

    container.innerHTML = html;
}

/**
* Generate pagination page range including first, last, surrounding pages and '...' placeholders.
* @example
* getPageRange(4, 10)
* [1, '...', 3, 4, 5, '...', 10]
* @param {number} current - Current active page (1-based).
* @param {number} total - Total number of pages.
* @returns {(Array<number|string>)} Array of page numbers and '...' strings representing the pagination range.
*/
function getPageRange(current, total) {
    if (total <= 7) {
        var arr = [];
        for (var i = 1; i <= total; i++) arr.push(i);
        return arr;
    }

    var pages = [];
    var rangeStart = Math.max(2, current - 1);
    var rangeEnd = Math.min(total - 1, current + 1);

    if (current <= 3) {
        rangeStart = 2;
        rangeEnd = 5;
    }
    if (current >= total - 2) {
        rangeStart = total - 4;
        rangeEnd = total - 1;
    }

    pages.push(1);
    if (rangeStart > 2) pages.push('...');
    for (var k = rangeStart; k <= rangeEnd; k++) {
        pages.push(k);
    }
    if (rangeEnd < total - 1) pages.push('...');
    pages.push(total);

    return pages;
}

function goToPage(page) {
    var totalPages = Math.ceil(getSortedData().length / pageSize);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    expandedRowIndex = -1;
    renderTable();
    document.querySelector('.table-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ==================== SORTING ====================

/**
* Returns a shallow copy of the global allData array, sorted by the current global sortKey and sortOrder; if no sortKey is defined or sortOrder is 'none', returns an unsorted shallow copy.
* @example
* getSortedData()
* [{ id: 1, name: 'alice' }, { id: 2, name: 'bob' }]
* @returns {Array<Object>} A new array of objects representing the (possibly) sorted data.
*/
function getSortedData() {
    if (!sortKey || sortOrder === 'none') {
        return allData.slice();
    }
    var sorted = allData.slice();
    var dir = sortOrder === 'asc' ? 1 : -1;
    sorted.sort(function (a, b) {
        var valA = (a[sortKey] || '').toLowerCase();
        var valB = (b[sortKey] || '').toLowerCase();
        if (valA < valB) return -1 * dir;
        if (valA > valB) return 1 * dir;
        return 0;
    });
    return sorted;
}

// ==================== EXPORT ====================

/**
* Generate and download a CSV file named 'activity_logs.csv' from sorted activity log data.
* @example
* exportCSV()
* Initiates download of 'activity_logs.csv' and returns undefined.
* @returns {void} Initiates CSV creation and download; does not return a value.
**/
function exportCSV() {
    var data = getSortedData();
    var headers = ['Module', 'Sub Module', 'Emp Name', 'Title', 'Description',
                   'Payroll Date', 'Action', 'Action By', 'Log Date', 'Log Time', 'Action From'];

    var csvContent = headers.join(',') + '\n';

    for (var i = 0; i < data.length; i++) {
        var row = data[i];
        var line = [
            '"' + row.module.replace(/"/g, '""') + '"',
            '"' + row.subModule.replace(/"/g, '""') + '"',
            '"' + row.empName.replace(/"/g, '""') + '"',
            '"' + row.title.replace(/"/g, '""') + '"',
            '"' + row.description.replace(/"/g, '""') + '"',
            '"' + row.payrollDate.replace(/"/g, '""') + '"',
            '"' + row.action.replace(/"/g, '""') + '"',
            '"' + row.actionBy.replace(/"/g, '""') + '"',
            '"' + row.logDate.replace(/"/g, '""') + '"',
            '"' + row.logTime.replace(/"/g, '""') + '"',
            '"' + row.actionFrom.replace(/"/g, '""') + '"'
        ];
        csvContent += line.join(',') + '\n';
    }

    var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'activity_logs.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportPDF() {
    window.print();
}

// ==================== SELECTION ====================

function getSelectedCount() {
    var count = 0;
    for (var key in selectedIds) {
        if (selectedIds.hasOwnProperty(key) && selectedIds[key]) count++;
    }
    return count;
}

function getSelectedData() {
    var result = [];
    for (var i = 0; i < originalData.length; i++) {
        if (selectedIds[originalData[i]._id]) {
            result.push(originalData[i]);
        }
    }
    return result;
}

function updateSelectionBar() {
    var count = getSelectedCount();
    var bar = document.getElementById('selectionBar');
    var countEl = document.getElementById('selectionCount');
    if (count > 0) {
        bar.classList.add('visible');
        countEl.textContent = count;
    } else {
        bar.classList.remove('visible');
    }
}

/**
* Update the "Select All" checkbox state based on items selected on the current page.
* @example
* updateSelectAllCheckbox([{_id: 'a'}, {_id: 'b'}])
* undefined
* @param {Array<Object>} pageData - Array of item objects visible on the current page; each must have an _id property.
* @returns {void} Updates the DOM checkbox with id "selectAllCheckbox"; does not return a value.
**/
function updateSelectAllCheckbox(pageData) {
    var cb = document.getElementById('selectAllCheckbox');
    if (!cb || !pageData || pageData.length === 0) {
        if (cb) { cb.checked = false; cb.indeterminate = false; }
        return;
    }
    var selectedOnPage = 0;
    for (var i = 0; i < pageData.length; i++) {
        if (selectedIds[pageData[i]._id]) selectedOnPage++;
    }
    if (selectedOnPage === 0) {
        cb.checked = false;
        cb.indeterminate = false;
    } else if (selectedOnPage === pageData.length) {
        cb.checked = true;
        cb.indeterminate = false;
    } else {
        cb.checked = false;
        cb.indeterminate = true;
    }
}

/**
* Export selected activity log entries to a CSV file and initiate download.
* @example
* exportSelectedCSV()
* // Initiates download of "selected_activity_logs.csv" containing the selected rows.
* @returns {void} Initiates a CSV download; no value is returned.
*/
function exportSelectedCSV() {
    var data = getSelectedData();
    if (data.length === 0) return;

    var headers = ['Module', 'Sub Module', 'Emp Name', 'Title', 'Description',
                   'Payroll Date', 'Action', 'Action By', 'Log Date', 'Log Time', 'Action From'];

    var csvContent = headers.join(',') + '\n';

    for (var i = 0; i < data.length; i++) {
        var row = data[i];
        var line = [
            '"' + row.module.replace(/"/g, '""') + '"',
            '"' + row.subModule.replace(/"/g, '""') + '"',
            '"' + row.empName.replace(/"/g, '""') + '"',
            '"' + row.title.replace(/"/g, '""') + '"',
            '"' + row.description.replace(/"/g, '""') + '"',
            '"' + row.payrollDate.replace(/"/g, '""') + '"',
            '"' + row.action.replace(/"/g, '""') + '"',
            '"' + row.actionBy.replace(/"/g, '""') + '"',
            '"' + row.logDate.replace(/"/g, '""') + '"',
            '"' + row.logTime.replace(/"/g, '""') + '"',
            '"' + row.actionFrom.replace(/"/g, '""') + '"'
        ];
        csvContent += line.join(',') + '\n';
    }

    var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'selected_activity_logs.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
* Export currently selected activity logs to a printable HTML document and trigger the print dialog.
* @example
* exportSelectedPDF()
* undefined
* @returns {void} Opens a new browser window containing formatted selected logs and calls print().
**/
function exportSelectedPDF() {
    var data = getSelectedData();
    if (data.length === 0) return;

    var printHtml = '<!DOCTYPE html><html><head><title>Selected Activity Logs</title>' +
        '<style>' +
        'body{font-family:"Open Sans",Arial,sans-serif;padding:20px;color:#333;margin:0;}' +
        'h2{color:#2c3e50;margin:0 0 4px;font-size:20px;}' +
        '.subtitle{color:#666;font-size:13px;margin:0 0 20px;}' +
        'table{width:100%;border-collapse:collapse;}' +
        'th{background:#f7f9fc;padding:8px 10px;text-align:left;border-bottom:2px solid #dce6f0;font-size:11px;font-weight:600;color:#2e86c1;}' +
        'td{padding:8px 10px;border-bottom:1px solid #f0f0f0;font-size:12px;vertical-align:top;color:#444;}' +
        '.activity-title{font-weight:600;color:#333;margin-bottom:2px;}' +
        '.activity-desc{color:#666;font-size:11px;}' +
        '.action-badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:600;text-transform:uppercase;}' +
        '.update{background:#e8f4fd;color:#2e86c1;}' +
        '.delete{background:#fde8e8;color:#e74c3c;}' +
        '.insert{background:#e8fdf0;color:#27ae60;}' +
        '</style>' +
        '</head><body>' +
        '<h2>Activity Logs</h2>' +
        '<p class="subtitle">' + data.length + ' selected log' + (data.length !== 1 ? 's' : '') + '</p>' +
        '<table><thead><tr>' +
        '<th>Module</th><th>Sub Module</th><th>Activity</th><th>Action</th><th>Action By</th><th>Emp Name</th><th>Logged At</th>' +
        '</tr></thead><tbody>';

    for (var i = 0; i < data.length; i++) {
        var row = data[i];
        var actionClass = getActionClass(row.action);
        printHtml += '<tr>' +
            '<td>' + esc(row.module) + '</td>' +
            '<td>' + esc(row.subModule) + '</td>' +
            '<td><div class="activity-title">' + esc(row.title) + '</div><div class="activity-desc">' + esc(row.description) + '</div></td>' +
            '<td><span class="action-badge ' + actionClass + '">' + esc(row.action) + '</span></td>' +
            '<td>' + esc(row.actionBy) + '</td>' +
            '<td>' + esc(row.empName) + '</td>' +
            '<td>' + esc(row.logDate) + ', ' + esc(row.logTime) + '</td>' +
            '</tr>';
    }

    printHtml += '</tbody></table></body></html>';

    var printWindow = window.open('', '_blank', 'width=900,height=600');
    printWindow.document.write(printHtml);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(function () {
        printWindow.print();
    }, 300);
}

// ==================== SEARCHABLE SELECT COMPONENT (MULTI-SELECT) ====================

var filterInstances = {};
var umFilterInstances = {};
var FILTER_KEYS = ['module', 'subModule', 'action', 'actionBy', 'empName', 'actionFrom', 'payrollDate', 'logTime'];

/**
* Create and initialize a searchable multi-select UI inside a DOM element, managing selection, filtering, keyboard navigation, and change callbacks.
* @example
* SearchableSelect(el, onChange)
* undefined
* @param {{HTMLElement}} {{el}} - Root DOM element where the searchable select will be rendered.
* @param {{Function}} {{onChange}} - Callback invoked when the selection changes (no arguments expected).
* @returns {{void}} No return value; the element is initialized and the instance is attached via the function (use as a constructor).
**/
function SearchableSelect(el, onChange) {
    var self = this;
    self.el = el;
    self.key = el.getAttribute('data-key');
    self.values = [];      // array of selected values
    self.options = [];      // [{value, count}]
    self.filteredOptions = [];
    self.isOpen = false;
    self.highlightIndex = -1;
    self.onChange = onChange || function () {};

    // Build DOM
    el.innerHTML =
        '<div class="ss-trigger">' +
            '<div class="ss-tags"><span class="ss-placeholder">All</span></div>' +
            '<button class="ss-clear-all" type="button" title="Clear all">' +
                '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
                'Clear' +
            '</button>' +
            '<svg class="ss-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>' +
        '</div>' +
        '<div class="ss-dropdown">' +
            '<div class="ss-search-wrap"><input class="ss-search" type="text" placeholder="Type to search..."></div>' +
            '<div class="ss-bulk-bar">' +
                '<button class="ss-select-all" type="button">Select All</button>' +
                '<button class="ss-deselect-all" type="button">Deselect All</button>' +
                '<span class="ss-bulk-count"></span>' +
            '</div>' +
            '<div class="ss-options"></div>' +
        '</div>';

    self.triggerEl = el.querySelector('.ss-trigger');
    self.tagsEl = el.querySelector('.ss-tags');
    self.dropdown = el.querySelector('.ss-dropdown');
    self.searchInput = el.querySelector('.ss-search');
    self.optionsList = el.querySelector('.ss-options');
    self.bulkBar = el.querySelector('.ss-bulk-bar');
    self.selectAllBtn = el.querySelector('.ss-select-all');
    self.deselectAllBtn = el.querySelector('.ss-deselect-all');
    self.bulkCount = el.querySelector('.ss-bulk-count');

    // --- Trigger click (open/close, but not on tag remove or clear-all buttons) ---
    self.triggerEl.addEventListener('click', function (e) {
        if (e.target.closest('.ss-tag-remove') || e.target.closest('.ss-clear-all')) return;
        if (self.isOpen) { self.close(); } else { self.open(); }
    });

    // --- Clear all button for this section ---
    el.querySelector('.ss-clear-all').addEventListener('click', function (e) {
        e.stopPropagation();
        if (self.values.length > 0) {
            self.values = [];
            self.updateTriggerDisplay();
            self.renderOptions();
            self.onChange();
        }
    });

    // --- Select All (visible/filtered options) ---
    self.selectAllBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var changed = false;
        for (var i = 0; i < self.filteredOptions.length; i++) {
            if (self.values.indexOf(self.filteredOptions[i].value) === -1) {
                self.values.push(self.filteredOptions[i].value);
                changed = true;
            }
        }
        if (changed) {
            self.updateTriggerDisplay();
            self.renderOptions();
            self.onChange();
        }
    });

    // --- Deselect All (visible/filtered options) ---
    self.deselectAllBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var toRemove = [];
        for (var i = 0; i < self.filteredOptions.length; i++) {
            toRemove.push(self.filteredOptions[i].value);
        }
        var changed = false;
        for (var j = self.values.length - 1; j >= 0; j--) {
            if (toRemove.indexOf(self.values[j]) !== -1) {
                self.values.splice(j, 1);
                changed = true;
            }
        }
        if (changed) {
            self.updateTriggerDisplay();
            self.renderOptions();
            self.onChange();
        }
    });

    // --- Tag remove buttons (event delegation) ---
    self.tagsEl.addEventListener('click', function (e) {
        var removeBtn = e.target.closest('.ss-tag-remove');
        if (!removeBtn) return;
        e.stopPropagation();
        var val = removeBtn.getAttribute('data-value');
        self.removeValue(val);
    });

    // --- Search typing ---
    self.searchInput.addEventListener('input', function () {
        self.filterOptions(this.value);
    });

    // --- Keyboard navigation ---
    self.searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            self.highlightIndex = Math.min(self.highlightIndex + 1, self.filteredOptions.length - 1);
            self.renderOptions();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            self.highlightIndex = Math.max(self.highlightIndex - 1, -1);
            self.renderOptions();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (self.highlightIndex >= 0 && self.highlightIndex < self.filteredOptions.length) {
                self.toggleValue(self.filteredOptions[self.highlightIndex].value);
            }
        } else if (e.key === 'Escape') {
            self.close();
        }
    });

    // --- Option click (toggle) ---
    self.optionsList.addEventListener('click', function (e) {
        var opt = e.target.closest('.ss-option');
        if (!opt) return;
        var val = opt.getAttribute('data-value');
        self.toggleValue(val);
    });

    // --- Close on outside click ---
    document.addEventListener('click', function (e) {
        if (self.isOpen && !el.contains(e.target)) {
            self.close();
        }
    });
}

SearchableSelect.prototype.isSelected = function (val) {
    return this.values.indexOf(val) !== -1;
};

SearchableSelect.prototype.toggleValue = function (val) {
    var idx = this.values.indexOf(val);
    if (idx !== -1) {
        this.values.splice(idx, 1);
    } else {
        this.values.push(val);
    }
    this.updateTriggerDisplay();
    this.renderOptions();
    this.onChange();
};

SearchableSelect.prototype.removeValue = function (val) {
    var idx = this.values.indexOf(val);
    if (idx !== -1) {
        this.values.splice(idx, 1);
        this.updateTriggerDisplay();
        this.renderOptions();
        this.onChange();
    }
};

SearchableSelect.prototype.updateTriggerDisplay = function () {
    if (this.values.length === 0) {
        this.tagsEl.innerHTML = '<span class="ss-placeholder">All</span>';
        this.el.classList.remove('has-value');
    } else {
        var html = '';
        for (var i = 0; i < this.values.length; i++) {
            html += '<span class="ss-tag">' +
                '<span class="ss-tag-text">' + esc(this.values[i]) + '</span>' +
                '<button class="ss-tag-remove" data-value="' + esc(this.values[i]) + '" type="button">&times;</button>' +
                '</span>';
        }
        this.tagsEl.innerHTML = html;
        this.el.classList.add('has-value');
    }
};

SearchableSelect.prototype.setOptions = function (opts) {
    this.options = opts;
    // Remove selected values that no longer exist in options
    var changed = false;
    for (var i = this.values.length - 1; i >= 0; i--) {
        var found = false;
        for (var j = 0; j < opts.length; j++) {
            if (opts[j].value === this.values[i]) { found = true; break; }
        }
        if (!found) {
            this.values.splice(i, 1);
            changed = true;
        }
    }
    if (changed) this.updateTriggerDisplay();
    this.filterOptions(this.searchInput && this.isOpen ? this.searchInput.value : '');
};

SearchableSelect.prototype.filterOptions = function (query) {
    var q = query.toLowerCase();
    if (!q) {
        this.filteredOptions = this.options.slice();
    } else {
        this.filteredOptions = [];
        for (var i = 0; i < this.options.length; i++) {
            if (this.options[i].value.toLowerCase().indexOf(q) !== -1) {
                this.filteredOptions.push(this.options[i]);
            }
        }
    }
    this.highlightIndex = -1;
    this.renderOptions();
};

SearchableSelect.prototype.renderOptions = function () {
    var html = '';
    if (this.filteredOptions.length === 0) {
        html = '<div class="ss-no-results">No matches found</div>';
    } else {
        for (var i = 0; i < this.filteredOptions.length; i++) {
            var opt = this.filteredOptions[i];
            var selected = this.isSelected(opt.value);
            var cls = 'ss-option';
            if (selected) cls += ' selected';
            if (i === this.highlightIndex) cls += ' highlighted';
            html += '<div class="' + cls + '" data-value="' + esc(opt.value) + '">' +
                '<span class="ss-check"></span>' +
                '<span class="ss-option-text">' + esc(opt.value) + '</span>' +
                '<span class="ss-option-count">' + opt.count + '</span>' +
                '</div>';
        }
    }
    this.optionsList.innerHTML = html;

    if (this.highlightIndex >= 0) {
        var highlighted = this.optionsList.querySelector('.highlighted');
        if (highlighted) highlighted.scrollIntoView({ block: 'nearest' });
    }

    // Update bulk bar state
    this.updateBulkBar();
};

SearchableSelect.prototype.updateBulkBar = function () {
    if (this.filteredOptions.length === 0) {
        this.bulkBar.style.display = 'none';
        return;
    }
    this.bulkBar.style.display = '';

    // Count how many of the visible options are selected
    var selectedVisible = 0;
    for (var i = 0; i < this.filteredOptions.length; i++) {
        if (this.isSelected(this.filteredOptions[i].value)) selectedVisible++;
    }
    var totalVisible = this.filteredOptions.length;
    var allSelected = selectedVisible === totalVisible;

    // Show/hide buttons based on state
    this.selectAllBtn.style.display = allSelected ? 'none' : '';
    this.deselectAllBtn.style.display = selectedVisible > 0 ? '' : 'none';

    // Show count summary
    if (selectedVisible > 0) {
        this.bulkCount.textContent = selectedVisible + ' of ' + totalVisible + ' selected';
    } else {
        this.bulkCount.textContent = totalVisible + ' available';
    }
};

SearchableSelect.prototype.clear = function () {
    this.values = [];
    this.updateTriggerDisplay();
};

SearchableSelect.prototype.open = function () {
    // Close any other open searchable selects first
    var allSets = [filterInstances, umFilterInstances];
    for (var s = 0; s < allSets.length; s++) {
        for (var k in allSets[s]) {
            if (allSets[s].hasOwnProperty(k) && allSets[s][k] !== this && allSets[s][k].isOpen) {
                allSets[s][k].close();
            }
        }
    }
    this.isOpen = true;
    this.el.classList.add('open');
    this.searchInput.value = '';
    this.filterOptions('');
    this.searchInput.focus();
};

SearchableSelect.prototype.close = function () {
    this.isOpen = false;
    this.el.classList.remove('open');
};

SearchableSelect.prototype.getValues = function () {
    return this.values.slice();
};

// ==================== FILTER LOGIC ====================

function getTotalFilterCount() {
    var count = 0;
    for (var key in activeFilters) {
        if (activeFilters.hasOwnProperty(key) && activeFilters[key] && activeFilters[key].length > 0) {
            count += activeFilters[key].length;
        }
    }
    return count;
}

/**
 * Update the filter badge and clear-actions visibility according to the current filter count.
 * @example
 * updateFilterBadge()
 * undefined
 * @param {void} none - This function does not accept any arguments.
 * @returns {void} Updates DOM elements (badge and .filter-actions) and does not return a value.
 */
function updateFilterBadge() {
    var count = getTotalFilterCount();
    var badge = document.getElementById('filterBadge');
    var clearActions = document.querySelector('.filter-actions');
    if (count > 0) {
        badge.textContent = count;
        badge.style.display = '';
        if (clearActions) clearActions.classList.add('visible');
    } else {
        badge.style.display = 'none';
        if (clearActions) clearActions.classList.remove('visible');
    }
}

/**
 * Return a shallow copy of originalData filtered to entries whose logDate falls within the confirmed DateRangePicker range (dates compared in 'DD-MM-YYYY' format). If no range is confirmed, returns an unfiltered copy of originalData.
 * @example
 * getDateFilteredData()
 * [ { id: 1, logDate: '01-02-2024', ... } ]
 * @returns {Array<Object>} A new array of data objects filtered by the confirmed date range or the full copy if no range is set.
 */
function getDateFilteredData() {
    var data = originalData.slice();
    var range = DateRangePicker.getConfirmedRange();
    if (range) {
        var targetDates = [];
        var current = new Date(range.from);
        while (current <= range.to) {
            var d = current.getDate();
            var m = current.getMonth() + 1;
            var y = current.getFullYear();
            targetDates.push(
                (d < 10 ? '0' : '') + d + '-' +
                (m < 10 ? '0' : '') + m + '-' + y
            );
            current.setDate(current.getDate() + 1);
        }
        var dateFiltered = [];
        for (var i = 0; i < data.length; i++) {
            if (targetDates.indexOf(data[i].logDate) !== -1) {
                dateFiltered.push(data[i]);
            }
        }
        data = dateFiltered;
    }
    return data;
}

// Check if a row matches a multi-value filter (any of the selected values)
function matchesFilter(rowValue, filterValues) {
    if (!filterValues || filterValues.length === 0) return true;
    var rv = (rowValue || '').toLowerCase();
    for (var i = 0; i < filterValues.length; i++) {
        if (rv === filterValues[i].toLowerCase()) return true;
    }
    return false;
}

/**
* Update filter option lists for each filter key by applying the date filter and all other active cross-filters (excluding the key being updated), compute unique values and their counts, and set those options on the corresponding filterInstances.
* @example
* updateFilterOptions()
* undefined
* @returns {void} Does not return a value; updates filterInstances in-place.
*/
function updateFilterOptions() {
    var baseData = getDateFilteredData();

    for (var k = 0; k < FILTER_KEYS.length; k++) {
        var currentKey = FILTER_KEYS[k];

        // Apply all OTHER active filters (cross-filter: exclude current key)
        var data = baseData;
        for (var filterKey in activeFilters) {
            if (!activeFilters.hasOwnProperty(filterKey)) continue;
            if (!activeFilters[filterKey] || activeFilters[filterKey].length === 0) continue;
            if (filterKey === currentKey) continue;
            var temp = [];
            for (var i = 0; i < data.length; i++) {
                if (matchesFilter(data[i][filterKey], activeFilters[filterKey])) {
                    temp.push(data[i]);
                }
            }
            data = temp;
        }

        // Collect unique values + count for this key
        var counts = {};
        for (var j = 0; j < data.length; j++) {
            var val = data[j][currentKey];
            if (val && val !== '-') {
                counts[val] = (counts[val] || 0) + 1;
            }
        }

        var opts = [];
        var keys = Object.keys(counts).sort();
        for (var m = 0; m < keys.length; m++) {
            opts.push({ value: keys[m], count: counts[keys[m]] });
        }

        if (filterInstances[currentKey]) {
            filterInstances[currentKey].setOptions(opts);
        }
    }
}

/**
* Update the global activeFilters object from current filterInstances, refresh filter badges and options, and re-apply filtering to the data.
* @example
* onFilterChange()
* undefined
* @returns {void} Does not return a value.
**/
function onFilterChange() {
    // Collect current values from all filter instances (arrays)
    activeFilters = {};
    for (var i = 0; i < FILTER_KEYS.length; i++) {
        var key = FILTER_KEYS[i];
        var vals = filterInstances[key] ? filterInstances[key].getValues() : [];
        if (vals.length > 0) activeFilters[key] = vals;
    }

    updateFilterBadge();
    updateFilterOptions();
    refilterData();
}

function clearAllFilters() {
    activeFilters = {};
    for (var key in filterInstances) {
        if (filterInstances.hasOwnProperty(key)) {
            filterInstances[key].clear();
        }
    }
    updateFilterBadge();
    updateFilterOptions();
    refilterData();
}

/**
* Refilters the current dataset by applying the date filter and then all active column filters (multi-value filters use OR matching), updates global state (allData, selectedIds, currentPage, expandedRowIndex), and re-renders the table.
* @example
* refilterData()
* undefined
* @param {{void}} {{none}} - No arguments.
* @returns {{void}} Updates global state and triggers a table re-render.
**/
function refilterData() {
    // Start from date-filtered data
    var data = getDateFilteredData();

    // Apply column filters (multi-value: row matches if ANY selected value matches)
    for (var key in activeFilters) {
        if (!activeFilters.hasOwnProperty(key)) continue;
        if (!activeFilters[key] || activeFilters[key].length === 0) continue;
        var filtered = [];
        for (var j = 0; j < data.length; j++) {
            if (matchesFilter(data[j][key], activeFilters[key])) {
                filtered.push(data[j]);
            }
        }
        data = filtered;
    }

    allData = data;
    selectedIds = {};
    currentPage = 1;
    expandedRowIndex = -1;
    renderTable();
}

function initSearchableSelects() {
    var containers = document.querySelectorAll('.searchable-select');
    for (var i = 0; i < containers.length; i++) {
        var ss = new SearchableSelect(containers[i], onFilterChange);
        filterInstances[ss.key] = ss;
    }
    updateFilterOptions();
}

// ==================== DATE RANGE PICKER ====================

var DateRangePicker = (function () {
    var isOpen = false;
    var viewYear = 0;
    var viewMonth = 0;
    var rangeFrom = null;
    var rangeTo = null;
    var hoverDate = null;
    var activePreset = null;
    var confirmedFrom = null;
    var confirmedTo = null;
    var monthYearPickerOpen = null; // 'left' or 'right' or null
    var mypYear = 0; // year being browsed in the month/year picker

    var trigger, popup, triggerFromEl, triggerToEl, triggerSep;
    var headerFrom, headerTo;
    var monthLabelLeft, monthLabelRight;
    var daysGridLeft, daysGridRight;
    var navPrev, navNext;
    var doneBtn, cancelBtn;
    var presetBtns;
    var mypEl;

    var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    var MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    function sameDay(a, b) {
        if (!a || !b) return false;
        return a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate();
    }

    function isBetween(date, start, end) {
        if (!start || !end) return false;
        var t = date.getTime();
        var s = start.getTime();
        var e = end.getTime();
        return t > Math.min(s, e) && t < Math.max(s, e);
    }

    function isBefore(a, b) {
        return a.getTime() < b.getTime();
    }

    var MAX_RANGE_DAYS = 31;

    function daysDiff(a, b) {
        return Math.round(Math.abs(a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
    }

    function isOutOfRange(cellDate, fromDate) {
        if (!fromDate) return false;
        return daysDiff(cellDate, fromDate) > MAX_RANGE_DAYS;
    }

    function formatDisplayDate(date) {
        if (!date) return '';
        return DAY_NAMES[date.getDay()] + ' ' + date.getDate() + ' ' +
            MONTH_NAMES[date.getMonth()].substring(0, 3);
    }

    function formatTriggerDate(date) {
        if (!date) return '';
        return date.getDate() + ' ' + MONTH_NAMES[date.getMonth()].substring(0, 3) + ' ' + date.getFullYear();
    }

    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    function getFirstDayOfMonth(year, month) {
        return new Date(year, month, 1).getDay();
    }

    /**
    * Returns a date range object for a given preset key ('today', 'last3', 'last7', 'thisMonth', 'lastMonth').
    * @example
    * getPresetRange('last7')
    * { from: Date, to: Date }
    * @param {string} key - Preset key: 'today', 'last3', 'last7', 'thisMonth', or 'lastMonth'.
    * @returns {{from: Date, to: Date}|null} Return an object with from and to Date instances (both normalized to midnight) for the requested range, or null if the key is not recognized.
    */
    function getPresetRange(key) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var from, to;
        switch (key) {
            case 'today':
                from = new Date(today); to = new Date(today); break;
            case 'last3':
                to = new Date(today); from = new Date(today); from.setDate(from.getDate() - 2); break;
            case 'last7':
                to = new Date(today); from = new Date(today); from.setDate(from.getDate() - 6); break;
            case 'thisMonth':
                from = new Date(today.getFullYear(), today.getMonth(), 1); to = new Date(today); break;
            case 'lastMonth':
                from = new Date(today.getFullYear(), today.getMonth() - 1, 1);
                to = new Date(today.getFullYear(), today.getMonth(), 0); break;
            default: return null;
        }
        return { from: from, to: to };
    }

    /**
    * Renders the calendar month into a grid element, building day cells with states for today, disabled, selected range, and hover previews.
    * @example
    * renderMonth(document.getElementById('calendarGrid'), 2023, 6)
    * undefined
    * @param {{HTMLElement}} {{gridEl}} - Container element whose innerHTML will be filled with day cells.
    * @param {{number}} {{year}} - Full year (e.g., 2023).
    * @param {{number}} {{month}} - Month as a zero-based index (0 = January, 11 = December).
    * @returns {{void}} Nothing is returned; the function updates the provided grid element's innerHTML.
    **/
    function renderMonth(gridEl, year, month) {
        var html = '';
        var daysInMonth = getDaysInMonth(year, month);
        var firstDay = getFirstDayOfMonth(year, month);
        var today = new Date();
        today.setHours(0, 0, 0, 0);

        for (var e = 0; e < firstDay; e++) {
            html += '<div class="day-cell empty"></div>';
        }

        // When one date selected but not the second, figure out the selectable window
        var pendingFrom = (rangeFrom && !rangeTo) ? rangeFrom : null;

        for (var d = 1; d <= daysInMonth; d++) {
            var cellDate = new Date(year, month, d);
            var classes = ['day-cell'];

            if (sameDay(cellDate, today)) classes.push('today');

            // Disable future dates
            if (cellDate.getTime() > today.getTime()) {
                classes.push('disabled');
            }
            // Disable dates beyond 31-day range when first date is selected
            else if (pendingFrom && isOutOfRange(cellDate, pendingFrom)) {
                classes.push('disabled');
            }

            var effectiveFrom = rangeFrom;
            var effectiveTo = rangeTo;
            if (effectiveFrom && effectiveTo && isBefore(effectiveTo, effectiveFrom)) {
                effectiveFrom = rangeTo;
                effectiveTo = rangeFrom;
            }

            var isStart = sameDay(cellDate, effectiveFrom);
            var isEnd = sameDay(cellDate, effectiveTo);

            if (isStart) classes.push('range-start');
            if (isEnd) classes.push('range-end');
            if (effectiveFrom && effectiveTo && isBetween(cellDate, effectiveFrom, effectiveTo)) {
                classes.push('in-range');
            }

            // Hover preview when one date selected
            if (pendingFrom && hoverDate && !sameDay(cellDate, rangeFrom)) {
                var previewStart = rangeFrom;
                var previewEnd = hoverDate;
                if (isBefore(previewEnd, previewStart)) {
                    previewStart = hoverDate;
                    previewEnd = rangeFrom;
                }
                if (isBetween(cellDate, previewStart, previewEnd) || sameDay(cellDate, hoverDate)) {
                    if (sameDay(cellDate, hoverDate)) {
                        classes.push('preview-endpoint');
                        if (isBefore(hoverDate, rangeFrom)) {
                            classes.push('range-start');
                        } else {
                            classes.push('range-end');
                        }
                    } else {
                        classes.push('in-range-preview');
                    }
                }
                // Also style the from-date with directional cap during preview
                if (sameDay(cellDate, rangeFrom) && hoverDate) {
                    if (isBefore(hoverDate, rangeFrom)) {
                        classes.push('range-end');
                    } else {
                        classes.push('range-start');
                    }
                }
            }

            html += '<div class="' + classes.join(' ') + '" data-date="' +
                year + '-' + (month + 1) + '-' + d + '">' + d + '</div>';
        }

        gridEl.innerHTML = html;
    }

    // --- Month/Year Picker (full-width overlay) ---
    /**
     * Render and open the month-year picker UI for the given side ('left' or 'right').
     * @example
     * renderMonthYearPicker('left')
     * undefined
     * @param {{string}} {{side}} - Which side initiated the picker; expected 'left' or 'right'.
     * @returns {{void}} No return value; the function updates the DOM to display the picker.
     */
    function renderMonthYearPicker(side) {
        var today = new Date();
        var currentM = today.getMonth();
        var currentY = today.getFullYear();

        // Determine the "active" month based on which side triggered it
        var targetMonth = viewMonth;
        var targetYear = viewYear;
        if (side === 'right') {
            targetMonth = viewMonth + 1;
            targetYear = viewYear;
            if (targetMonth > 11) { targetMonth = 0; targetYear++; }
        }

        var html = '<div class="myp-year-nav">' +
            '<button class="myp-arrow" data-dir="prev" type="button">&lsaquo;</button>' +
            '<span class="myp-year-label">' + mypYear + '</span>' +
            '<button class="myp-arrow" data-dir="next" type="button">&rsaquo;</button>' +
            '</div>' +
            '<div class="myp-months-grid">';

        for (var m = 0; m < 12; m++) {
            var classes = ['myp-month-btn'];
            if (mypYear === targetYear && m === targetMonth) classes.push('active');
            if (mypYear === currentY && m === currentM) classes.push('current-month');
            // Disable future months
            if (mypYear > currentY || (mypYear === currentY && m > currentM)) classes.push('disabled');
            html += '<button class="' + classes.join(' ') + '" data-month="' + m + '" type="button"' +
                (classes.indexOf('disabled') !== -1 ? ' disabled' : '') + '>' +
                MONTH_SHORT[m] + '</button>';
        }

        html += '</div>';
        mypEl.innerHTML = html;
        mypEl.classList.add('open');
        monthYearPickerOpen = side;
    }

    function closeMonthYearPicker() {
        if (monthYearPickerOpen) {
            mypEl.classList.remove('open');
            mypEl.innerHTML = '';
            monthYearPickerOpen = null;
        }
    }

    /**
    * Handle a month selection for either the left or right calendar, updating viewMonth and viewYear with clamping so the right calendar never advances past the current month, then close the picker and re-render.
    * @example
    * onMonthYearSelect('left', 4)
    * undefined
    * @param {{string}} {{side}} - Side of the calendar that was changed: 'left' or 'right'.
    * @param {{number}} {{month}} - Selected month index (0 = January, 11 = December).
    * @returns {{void}} Updates global viewMonth/viewYear, closes the month/year picker and triggers a render; does not return a value.
    **/
    function onMonthYearSelect(side, month) {
        var today = new Date();
        var currentY = today.getFullYear();
        var currentM = today.getMonth();

        if (side === 'left') {
            viewYear = mypYear;
            viewMonth = month;
            // Clamp: right calendar (viewMonth+1) should not exceed current month
            var rm = viewMonth + 1;
            var ry = viewYear;
            if (rm > 11) { rm = 0; ry++; }
            if (ry > currentY || (ry === currentY && rm > currentM)) {
                // Push back so right calendar = current month
                viewYear = currentY;
                viewMonth = currentM - 1;
                if (viewMonth < 0) { viewMonth = 11; viewYear--; }
            }
        } else {
            // Right calendar shows viewMonth+1, so set viewMonth = selected - 1
            var newViewMonth = month - 1;
            var newViewYear = mypYear;
            if (newViewMonth < 0) { newViewMonth = 11; newViewYear--; }
            // Clamp: selected month for right cannot be beyond current month
            if (mypYear > currentY || (mypYear === currentY && month > currentM)) {
                newViewYear = currentY;
                newViewMonth = currentM - 1;
                if (newViewMonth < 0) { newViewMonth = 11; newViewYear--; }
            }
            viewYear = newViewYear;
            viewMonth = newViewMonth;
        }
        closeMonthYearPicker();
        render();
    }

    /**
    * Render the two-month calendar view and update DOM labels, navigation state, headers, presets and action buttons based on the current view and selected date range.
    * @example
    * render()
    * undefined
    * @returns {void} No return value; updates UI state and elements directly.
    **/
    function render() {
        monthLabelLeft.textContent = MONTH_NAMES[viewMonth] + ' ' + viewYear;

        var rightMonth = viewMonth + 1;
        var rightYear = viewYear;
        if (rightMonth > 11) { rightMonth = 0; rightYear++; }
        monthLabelRight.textContent = MONTH_NAMES[rightMonth] + ' ' + rightYear;

        renderMonth(daysGridLeft, viewYear, viewMonth);
        renderMonth(daysGridRight, rightYear, rightMonth);

        // Disable forward nav when right calendar is already at current month
        var today = new Date();
        var atLimit = (rightYear > today.getFullYear()) ||
            (rightYear === today.getFullYear() && rightMonth >= today.getMonth());
        navNext.disabled = atLimit;
        navNext.classList.toggle('nav-disabled', atLimit);

        var effectiveFrom = rangeFrom;
        var effectiveTo = rangeTo;
        if (effectiveFrom && effectiveTo && isBefore(effectiveTo, effectiveFrom)) {
            effectiveFrom = rangeTo; effectiveTo = rangeFrom;
        }

        headerFrom.textContent = effectiveFrom ? formatDisplayDate(effectiveFrom) : 'Start date';
        headerFrom.classList.toggle('empty', !effectiveFrom);
        headerTo.textContent = effectiveTo ? formatDisplayDate(effectiveTo) : 'End date';
        headerTo.classList.toggle('empty', !effectiveTo);

        doneBtn.disabled = !(rangeFrom && rangeTo);

        for (var i = 0; i < presetBtns.length; i++) {
            presetBtns[i].classList.remove('active');
        }
        if (activePreset) {
            for (var j = 0; j < presetBtns.length; j++) {
                if (presetBtns[j].getAttribute('data-preset') === activePreset) {
                    presetBtns[j].classList.add('active');
                    break;
                }
            }
        }
    }

    /**
    * Update the trigger date display in the UI according to confirmedFrom and confirmedTo.
    * @example
    * updateTriggerDisplay()
    * // Updates DOM elements; no return value.
    * @returns {void} Does not return a value; updates triggerFromEl, triggerToEl and triggerSep in the DOM.
    */
    function updateTriggerDisplay() {
        if (confirmedFrom && confirmedTo) {
            var from = confirmedFrom;
            var to = confirmedTo;
            if (isBefore(to, from)) { from = confirmedTo; to = confirmedFrom; }
            triggerFromEl.textContent = formatTriggerDate(from);
            triggerFromEl.classList.remove('placeholder');
            triggerSep.style.display = '';
            triggerToEl.textContent = formatTriggerDate(to);
        } else {
            triggerFromEl.textContent = 'Select dates';
            triggerFromEl.classList.add('placeholder');
            triggerSep.style.display = 'none';
            triggerToEl.textContent = '';
        }
    }

    /**
    * Open the date range picker popup, initialize view and range state, and render the UI.
    * @example
    * open()
    * undefined
    * @returns {void} No return value; function performs side effects by updating state and DOM.
    **/
    function open() {
        if (isOpen) return;
        isOpen = true;

        if (confirmedFrom) {
            viewYear = confirmedFrom.getFullYear();
            viewMonth = confirmedFrom.getMonth();
            rangeFrom = new Date(confirmedFrom);
            rangeTo = confirmedTo ? new Date(confirmedTo) : null;
        } else {
            var today = new Date();
            viewYear = today.getFullYear();
            viewMonth = today.getMonth();
            rangeFrom = null;
            rangeTo = null;
        }

        hoverDate = null;
        activePreset = null;
        popup.classList.add('open');
        trigger.classList.add('active');
        render();
    }

    function close() {
        if (!isOpen) return;
        isOpen = false;
        popup.classList.remove('open');
        trigger.classList.remove('active');
    }

    function confirm() {
        if (!rangeFrom || !rangeTo) return;
        var from = rangeFrom;
        var to = rangeTo;
        if (isBefore(to, from)) { from = rangeTo; to = rangeFrom; }
        confirmedFrom = from;
        confirmedTo = to;
        updateTriggerDisplay();
        close();
    }

    /**
    * Handle a click on a calendar day: update the selection range (rangeFrom/rangeTo), clear active preset, enforce a maximum 31-day range, and re-render.
    * @example
    * onDayClick('2023-06-15')
    * undefined
    * @param {{string}} {{dateStr}} - Date string in 'YYYY-MM-DD' format representing the clicked day.
    * @returns {{void}} Does not return a value; updates module-level selection state and calls render().
    **/
    function onDayClick(dateStr) {
        var parts = dateStr.split('-');
        var clicked = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
        activePreset = null;

        if (!rangeFrom || (rangeFrom && rangeTo)) {
            // Starting a new selection
            rangeFrom = clicked;
            rangeTo = null;
        } else {
            // Selecting end date - enforce max 31-day range
            if (isOutOfRange(clicked, rangeFrom)) return;
            rangeTo = clicked;
        }
        render();
    }

    /**
     * Handle hovering over a calendar day string, updating internal hover state and triggering a re-render.
     * @example
     * onDayHover('2023-07-15')
     * undefined
     * @param {string} dateStr - Date string in "YYYY-MM-DD" format representing the hovered day.
     * @returns {void} No return value; updates hover state and triggers re-render as a side effect.
     */
    function onDayHover(dateStr) {
        if (!rangeFrom || rangeTo) {
            if (hoverDate) { hoverDate = null; render(); }
            return;
        }
        var parts = dateStr.split('-');
        var newHover = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
        // Only re-render if hover date actually changed
        if (hoverDate && sameDay(hoverDate, newHover)) return;
        hoverDate = newHover;
        render();
    }

    function onDayLeave() {
        if (hoverDate) { hoverDate = null; render(); }
    }

    function getConfirmedRange() {
        if (!confirmedFrom || !confirmedTo) return null;
        var from = confirmedFrom;
        var to = confirmedTo;
        if (isBefore(to, from)) { from = confirmedTo; to = confirmedFrom; }
        return { from: from, to: to };
    }

    /**
    * Initialize the date range picker: cache DOM elements, update the trigger display, and attach all event listeners for opening/closing the popup, navigation, month/year picker, day grid interactions, presets, and confirm/cancel actions.
    * @example
    * init()
    * undefined
    * @returns {void} No return value.
    **/
    function init() {
        trigger = document.getElementById('dateRangeTrigger');
        popup = document.getElementById('datePickerPopup');
        triggerFromEl = document.getElementById('triggerFrom');
        triggerToEl = document.getElementById('triggerTo');
        triggerSep = document.querySelector('.trigger-separator');
        headerFrom = document.getElementById('pickerHeaderFrom');
        headerTo = document.getElementById('pickerHeaderTo');
        monthLabelLeft = document.getElementById('monthLabelLeft');
        monthLabelRight = document.getElementById('monthLabelRight');
        daysGridLeft = document.getElementById('daysGridLeft');
        daysGridRight = document.getElementById('daysGridRight');
        navPrev = document.getElementById('navPrev');
        navNext = document.getElementById('navNext');
        doneBtn = document.getElementById('pickerDone');
        cancelBtn = document.getElementById('pickerCancel');
        presetBtns = document.querySelectorAll('.preset-btn');
        mypEl = document.getElementById('monthYearPicker');

        updateTriggerDisplay();

        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            if (isOpen) { close(); } else { open(); }
        });

        document.addEventListener('click', function (e) {
            if (isOpen && !popup.contains(e.target) && !trigger.contains(e.target)) {
                close();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && isOpen) close();
        });

        navPrev.addEventListener('click', function (e) {
            e.stopPropagation();
            closeMonthYearPicker();
            viewMonth--;
            if (viewMonth < 0) { viewMonth = 11; viewYear--; }
            render();
        });

        navNext.addEventListener('click', function (e) {
            e.stopPropagation();
            if (navNext.disabled) return;
            closeMonthYearPicker();
            viewMonth++;
            if (viewMonth > 11) { viewMonth = 0; viewYear++; }
            render();
        });

        // --- Month Label Click → open month/year picker ---
        monthLabelLeft.addEventListener('click', function (e) {
            e.stopPropagation();
            if (monthYearPickerOpen === 'left') {
                closeMonthYearPicker();
            } else {
                closeMonthYearPicker();
                mypYear = viewYear;
                renderMonthYearPicker('left');
            }
        });

        monthLabelRight.addEventListener('click', function (e) {
            e.stopPropagation();
            if (monthYearPickerOpen === 'right') {
                closeMonthYearPicker();
            } else {
                closeMonthYearPicker();
                var rm = viewMonth + 1;
                var ry = viewYear;
                if (rm > 11) { rm = 0; ry++; }
                mypYear = ry;
                renderMonthYearPicker('right');
            }
        });

        // --- Month/Year picker event delegation (single overlay) ---
        mypEl.addEventListener('click', function (e) {
            e.stopPropagation();
            var arrow = e.target.closest('.myp-arrow');
            if (arrow) {
                var dir = arrow.getAttribute('data-dir');
                if (dir === 'prev') mypYear--;
                else mypYear++;
                renderMonthYearPicker(monthYearPickerOpen);
                return;
            }
            var monthBtn = e.target.closest('.myp-month-btn');
            if (monthBtn && !monthBtn.disabled) {
                var m = parseInt(monthBtn.getAttribute('data-month'), 10);
                onMonthYearSelect(monthYearPickerOpen, m);
                return;
            }
        });

        function handleGridClick(e) {
            var cell = e.target.closest('.day-cell');
            if (!cell || cell.classList.contains('empty') || cell.classList.contains('disabled')) return;
            var dateStr = cell.getAttribute('data-date');
            if (dateStr) onDayClick(dateStr);
        }

        var hoverTimer = null;
        /**
        * Handle hover events on a calendar grid, triggering a debounced onDayHover for valid day cells and clearing hover state for empty/disabled cells.
        * @example
        * handleGridHover(event)
        * undefined
        * @param {{Event}} {{e}} - The DOM event fired from the grid (e.g., mouseover/mousemove).
        * @returns {{void}} Does not return a value; schedules or clears hover callbacks.
        **/
        function handleGridHover(e) {
            var cell = e.target.closest('.day-cell');
            if (!cell || cell.classList.contains('empty') || cell.classList.contains('disabled')) {
                if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null; }
                onDayLeave();
                return;
            }
            var dateStr = cell.getAttribute('data-date');
            if (!dateStr) return;
            // Small delay to prevent render thrashing that eats click events
            if (hoverTimer) clearTimeout(hoverTimer);
            hoverTimer = setTimeout(function () {
                hoverTimer = null;
                onDayHover(dateStr);
            }, 30);
        }

        daysGridLeft.addEventListener('click', handleGridClick);
        daysGridRight.addEventListener('click', handleGridClick);
        daysGridLeft.addEventListener('mouseover', handleGridHover);
        daysGridRight.addEventListener('mouseover', handleGridHover);
        daysGridLeft.addEventListener('mouseleave', function () {
            if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null; }
            onDayLeave();
        });
        daysGridRight.addEventListener('mouseleave', function () {
            if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null; }
            onDayLeave();
        });

        for (var i = 0; i < presetBtns.length; i++) {
            presetBtns[i].addEventListener('click', function () {
                var key = this.getAttribute('data-preset');
                var range = getPresetRange(key);
                if (!range) return;
                rangeFrom = range.from;
                rangeTo = range.to;
                activePreset = key;
                viewYear = range.from.getFullYear();
                viewMonth = range.from.getMonth();
                render();
            });
        }

        doneBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            confirm();
        });

        cancelBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            close();
        });

        popup.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }

    return { init: init, getConfirmedRange: getConfirmedRange };
})();

// ==================== EVENT LISTENERS ====================

function init() {
    // --- Initialize Date Range Picker ---
    DateRangePicker.init();

    // --- Store original data for reset ---
    originalData = allData.slice();

    // --- Populate filter dropdowns ---
    initSearchableSelects();

    // --- Sidebar Toggle (hamburger menu) ---
    var sidebar = document.getElementById('appSidebar');
    var overlay = document.getElementById('sidebarOverlay');
    var hamburger = document.getElementById('hamburgerBtn');

    function toggleSidebar() {
        var isMobile = window.innerWidth <= 768;
        if (isMobile) {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('visible');
        } else {
            sidebar.classList.toggle('collapsed');
            document.querySelector('.app-main').classList.toggle('sidebar-collapsed');
        }
    }

    hamburger.addEventListener('click', toggleSidebar);

    overlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
    });

    // Close mobile sidebar on window resize to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
            overlay.classList.remove('visible');
        }
    });

    // --- Fullscreen Toggle ---
    var fullscreenBtn = document.getElementById('fullscreenToggle');
    if (fullscreenBtn) {
        var fsLabel = fullscreenBtn.querySelector('.fs-label');
        function updateFsState() {
            var isFs = document.body.classList.contains('logs-fullscreen');
            fullscreenBtn.classList.toggle('active', isFs);
            if (fsLabel) fsLabel.textContent = isFs ? 'Exit Full Screen' : 'Full Screen';
        }
        fullscreenBtn.addEventListener('click', function () {
            document.body.classList.toggle('logs-fullscreen');
            updateFsState();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && document.body.classList.contains('logs-fullscreen')) {
                document.body.classList.remove('logs-fullscreen');
                updateFsState();
            }
        });
    }

    // --- Filter Toggle Button ---
    document.getElementById('filterToggleBtn').addEventListener('click', function () {
        var panel = document.getElementById('filterPanel');
        panel.classList.toggle('open');
        this.classList.toggle('active');
    });

    // --- Clear All Filters ---
    document.getElementById('clearFiltersBtn').addEventListener('click', clearAllFilters);

    // --- Search Button (date range + active filters) ---
    document.getElementById('searchBtn').addEventListener('click', function () {
        // Date range changed, so update filter options to be contextual
        updateFilterOptions();
        refilterData();
    });

    // --- Export Buttons ---
    document.getElementById('exportCsvBtn').addEventListener('click', exportCSV);
    document.getElementById('exportPdfBtn').addEventListener('click', exportPDF);

    // --- Row Checkbox (table) ---
    document.getElementById('tableBody').addEventListener('change', function (e) {
        if (e.target.classList.contains('row-checkbox')) {
            var id = parseInt(e.target.getAttribute('data-id'), 10);
            if (e.target.checked) {
                selectedIds[id] = true;
            } else {
                delete selectedIds[id];
            }
            var tr = e.target.closest('tr.data-row');
            if (tr) tr.classList.toggle('selected', !!selectedIds[id]);
            updateSelectionBar();
            var data = getSortedData();
            var start = (currentPage - 1) * pageSize;
            var end = Math.min(start + pageSize, data.length);
            updateSelectAllCheckbox(data.slice(start, end));
        }
    });

    // --- Row Checkbox (mobile cards) ---
    document.getElementById('cardList').addEventListener('change', function (e) {
        if (e.target.classList.contains('row-checkbox')) {
            var id = parseInt(e.target.getAttribute('data-id'), 10);
            if (e.target.checked) {
                selectedIds[id] = true;
            } else {
                delete selectedIds[id];
            }
            var card = e.target.closest('.log-card');
            if (card) card.classList.toggle('selected', !!selectedIds[id]);
            updateSelectionBar();
        }
    });

    // --- Select All Checkbox ---
    document.getElementById('selectAllCheckbox').addEventListener('change', function () {
        var data = getSortedData();
        var start = (currentPage - 1) * pageSize;
        var end = Math.min(start + pageSize, data.length);
        var pageData = data.slice(start, end);

        if (this.checked) {
            for (var i = 0; i < pageData.length; i++) {
                selectedIds[pageData[i]._id] = true;
            }
        } else {
            for (var i = 0; i < pageData.length; i++) {
                delete selectedIds[pageData[i]._id];
            }
        }
        renderTable();
    });

    // --- Clear Selection ---
    document.getElementById('clearSelection').addEventListener('click', function () {
        selectedIds = {};
        renderTable();
    });

    // --- Export Selected ---
    document.getElementById('exportSelectedCsvBtn').addEventListener('click', exportSelectedCSV);
    document.getElementById('exportSelectedPdfBtn').addEventListener('click', exportSelectedPDF);

    // --- Page Size Change ---
    document.getElementById('pageSizeSelect').addEventListener('change', function () {
        pageSize = parseInt(this.value, 10);
        currentPage = 1;
        expandedRowIndex = -1;
        renderTable();
    });

    // --- Sort Headers (event delegation) ---
    document.querySelector('.data-table thead').addEventListener('click', function (e) {
        var th = e.target.closest('th[data-key]');
        if (!th) return;

        var key = th.getAttribute('data-key');

        // Reset other headers
        document.querySelectorAll('.data-table thead th[data-key]').forEach(function (header) {
            if (header !== th) {
                header.removeAttribute('data-sort');
                var icon = header.querySelector('.sort-icon');
                if (icon) icon.textContent = '';
            }
        });

        var currentSort = th.getAttribute('data-sort') || 'none';
        var nextSort, iconChar;

        if (currentSort === 'none' || currentSort === 'desc') {
            nextSort = 'asc';
            iconChar = '\u25B2';
        } else {
            nextSort = 'desc';
            iconChar = '\u25BC';
        }

        th.setAttribute('data-sort', nextSort);
        th.querySelector('.sort-icon').textContent = iconChar;
        sortKey = key;
        sortOrder = nextSort;

        currentPage = 1;
        expandedRowIndex = -1;
        renderTable();
    });

    // --- Row Click Expansion (event delegation) ---
    document.getElementById('tableBody').addEventListener('click', function (e) {
        if (e.target.closest('.checkbox-label')) return;
        var tr = e.target.closest('tr.data-row');
        if (!tr) return;

        var index = parseInt(tr.getAttribute('data-index'), 10);

        if (expandedRowIndex === index) {
            expandedRowIndex = -1;
        } else {
            expandedRowIndex = index;
        }

        renderTable();
    });

    // --- Sidebar Page Navigation ---
    var pageMap = {
        activityLogs: document.getElementById('pageActivityLogs'),
        settings: document.getElementById('pageSettings')
    };

    /**
    * Toggle sidebar navigation state and switch visible page content based on the provided item and page key.
    * @example
    * performPageNav(someSidebarItemElement, 'settings')
    * undefined
    * @param {HTMLElement} item - The sidebar item element that was clicked or activated.
    * @param {string} pageKey - The key identifying which page/view should be activated.
    * @returns {void} Performs DOM updates (active classes, submenu/accordion behavior, responsive closing) and does not return a value.
    **/
    function performPageNav(item, pageKey) {
        var allItems = document.querySelectorAll('.sidebar-item');
        for (var j = 0; j < allItems.length; j++) {
            allItems[j].classList.remove('active');
        }
        item.classList.add('active');

        // Close UM submenu when navigating away from User Management
        var umSidebar = document.getElementById('sidebarUserMgmt');
        if (umSidebar && pageKey !== 'userManagement') {
            umSidebar.classList.remove('open');
        }

        for (var key in pageMap) {
            if (pageMap.hasOwnProperty(key)) {
                pageMap[key].classList.toggle('active', key === pageKey);
            }
        }

        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
            overlay.classList.remove('visible');
        }

        // When opening Settings, auto-open Management accordion + show first section with delay
        if (pageKey === 'settings') {
            var accordion = document.querySelector('.nav-accordion');
            if (accordion) {
                // First close accordion if open, then animate it open after a brief delay
                accordion.classList.remove('open');

                setTimeout(function () {
                    accordion.classList.add('open');

                    // After accordion animates open, activate first sub-item
                    setTimeout(function () {
                        var firstSubLink = accordion.querySelector('.nav-sub-link');
                        if (firstSubLink) {
                            performSettingsNav(firstSubLink);
                        }
                    }, 250);
                }, 300);
            }
        }
    }

    var sidebarItems = document.querySelectorAll('.sidebar-item[data-page]');
    for (var si = 0; si < sidebarItems.length; si++) {
        sidebarItems[si].addEventListener('click', function (e) {
            e.preventDefault();
            var pageKey = this.getAttribute('data-page');
            if (!pageKey || !pageMap[pageKey]) return;
            // User Management has its own handler
            if (pageKey === 'userManagement') return;

            var self = this;
            // Check if leaving settings page with unsaved changes
            if (slipDirty && pageKey !== 'settings') {
                showUnsavedModal(function () {
                    performPageNav(self, pageKey);
                }, 'salarySlip');
                return;
            }
            if (pageKey !== 'settings' && (shiftsDirty || attendanceDirty || hardwareDirty || payrollDirty)) {
                showUnsavedModal(function () {
                    performPageNav(self, pageKey);
                }, 'management');
                return;
            }

            performPageNav(this, pageKey);
        });
    }

    // --- Settings Nav (internal left nav) ---
    var managementSections = ['shifts', 'attendance', 'hardware', 'employee', 'payroll'];

    var sectionMap = {
        management: document.getElementById('sectionManagement'),
        configurations: document.getElementById('sectionConfigurations'),
        salarySlip: document.getElementById('sectionSalarySlip')
    };

    var mgmtScrollContainer = document.getElementById('mgmtScrollContainer');

    // Map management sub-section keys to their scroll-item elements
    var mgmtItemMap = {
        shifts: document.getElementById('sectionShifts'),
        attendance: document.getElementById('sectionAttendance'),
        hardware: document.getElementById('sectionHardware'),
        employee: document.getElementById('sectionEmployee'),
        payroll: document.getElementById('sectionPayroll')
    };

    /**
    * Switches the active settings navigation item and shows the corresponding settings section; when a management subsection is targeted it centers that subsection inside the management scroll container with a smooth scroll.
    * @example
    * performSettingsNav(document.querySelector('.settings-nav-item[data-section="example"]'))
    * undefined
    * @param {HTMLElement} linkEl - Clicked navigation link element with a "data-section" attribute.
    * @returns {void} No return value.
    **/
    function performSettingsNav(linkEl) {
        var sectionKey = linkEl.getAttribute('data-section');
        var isMgmt = managementSections.indexOf(sectionKey) !== -1;

        // Update sidebar active states
        var navItems = document.querySelectorAll('.settings-nav-item');
        for (var k = 0; k < navItems.length; k++) {
            navItems[k].classList.remove('active');
        }
        linkEl.parentElement.classList.add('active');

        if (isMgmt) {
            // Show management wrapper, hide other top-level sections
            sectionMap.management.classList.add('active');
            sectionMap.configurations.classList.remove('active');
            sectionMap.salarySlip.classList.remove('active');

            // Smooth-scroll to center the target sub-section within the container
            var targetItem = mgmtItemMap[sectionKey];
            if (targetItem && mgmtScrollContainer) {
                var containerH = mgmtScrollContainer.clientHeight;
                var itemTop = targetItem.offsetTop - mgmtScrollContainer.offsetTop;
                var itemH = targetItem.offsetHeight;
                var scrollTarget;
                if (itemH >= containerH) {
                    // Section is taller than viewport — scroll to its top
                    scrollTarget = itemTop;
                } else {
                    // Center the section vertically
                    scrollTarget = itemTop - (containerH - itemH) / 2;
                }
                mgmtScrollContainer.scrollTo({
                    top: Math.max(0, scrollTarget),
                    behavior: 'smooth'
                });
            }
        } else {
            // Hide management, show target top-level section
            sectionMap.management.classList.remove('active');
            for (var sec in sectionMap) {
                if (sectionMap.hasOwnProperty(sec) && sectionMap[sec]) {
                    sectionMap[sec].classList.toggle('active', sec === sectionKey);
                }
            }
        }
    }

    // --- Highlight clicked section (pulse + dim others) ---
    var highlightTimer = null;
    /**
    * Temporarily highlights a management section element identified by the given key by adding CSS classes and removing them shortly after.
    * @example
    * highlightSection('users')
    * undefined
    * @param {string} sectionKey - Key used to look up the target element in the global mgmtItemMap; function returns early if no item or container exists.
    * @returns {void} Does not return a value; performs DOM class toggling and uses a timeout to clear the highlight.
    */
    function highlightSection(sectionKey) {
        var targetItem = mgmtItemMap[sectionKey];
        if (!targetItem || !mgmtScrollContainer) return;

        // Clear any previous highlight
        if (highlightTimer) clearTimeout(highlightTimer);
        var allItems = mgmtScrollContainer.querySelectorAll('.mgmt-scroll-item');
        for (var i = 0; i < allItems.length; i++) {
            allItems[i].classList.remove('mgmt-highlight');
        }
        mgmtScrollContainer.classList.remove('mgmt-focusing');

        // Apply highlight + focusing mode
        void targetItem.offsetWidth; // force reflow
        targetItem.classList.add('mgmt-highlight');
        mgmtScrollContainer.classList.add('mgmt-focusing');

        // Remove after 1.8s
        highlightTimer = setTimeout(function () {
            targetItem.classList.remove('mgmt-highlight');
            mgmtScrollContainer.classList.remove('mgmt-focusing');
            highlightTimer = null;
        }, 700);
    }

    // Accordion toggle for Management — also opens management view on expand
    var accordionToggles = document.querySelectorAll('.nav-accordion-toggle');
    for (var at = 0; at < accordionToggles.length; at++) {
        accordionToggles[at].addEventListener('click', function (e) {
            e.preventDefault();
            var accordion = this.closest('.nav-accordion');
            if (!accordion) return;
            var wasOpen = accordion.classList.contains('open');
            accordion.classList.toggle('open');

            // When opening the accordion, also show management section + activate first sub-item
            if (!wasOpen) {
                var firstSubLink = accordion.querySelector('.nav-sub-link');
                if (firstSubLink) {
                    // Check dirty before navigating
                    var self = firstSubLink;
                    if (slipDirty) {
                        showUnsavedModal(function () {
                            performSettingsNav(self);
                        }, 'salarySlip');
                    } else {
                        performSettingsNav(firstSubLink);
                    }
                }
            }
        });
    }

    function isManagementDirty() {
        return shiftsDirty || attendanceDirty || hardwareDirty || payrollDirty;
    }

    var settingsNavLinks = document.querySelectorAll('.settings-nav-link:not(.nav-accordion-toggle)');
    for (var sn = 0; sn < settingsNavLinks.length; sn++) {
        settingsNavLinks[sn].addEventListener('click', function (e) {
            e.preventDefault();
            var self = this;
            var targetSection = this.getAttribute('data-section');
            var targetIsMgmt = managementSections.indexOf(targetSection) !== -1;

            // Check if leaving salary slip with unsaved changes
            if (slipDirty && targetSection !== 'salarySlip') {
                showUnsavedModal(function () {
                    performSettingsNav(self);
                }, 'salarySlip');
                return;
            }

            // Check if leaving management with unsaved changes (only when going to non-management)
            if (!targetIsMgmt && isManagementDirty()) {
                showUnsavedModal(function () {
                    performSettingsNav(self);
                }, 'management');
                return;
            }

            performSettingsNav(this);
            // Highlight the target section if it's a management sub-section
            if (targetIsMgmt) {
                highlightSection(targetSection);
            }
        });
    }

    // --- Scroll-spy for Management sections ---
    /**
    * Initialize a scroll spy that observes section elements inside the global mgmtScrollContainer and toggles the 'active' class on sidebar links based on the currently visible section.
    * @example
    * initScrollSpy()
    * undefined
    * @returns {void} Sets up an IntersectionObserver and updates sidebar link active states; does not return a value.
    **/
    (function initScrollSpy() {
        if (!mgmtScrollContainer) return;
        var scrollItems = mgmtScrollContainer.querySelectorAll('.mgmt-scroll-item');
        if (!scrollItems.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var id = entry.target.id;
                // Map sectionId to data-section key
                var keyMap = {
                    sectionShifts: 'shifts',
                    sectionAttendance: 'attendance',
                    sectionHardware: 'hardware',
                    sectionEmployee: 'employee',
                    sectionPayroll: 'payroll'
                };
                var sectionKey = keyMap[id];
                if (!sectionKey) return;

                // Update sidebar active state
                var subLinks = document.querySelectorAll('.nav-sub-link');
                for (var i = 0; i < subLinks.length; i++) {
                    var li = subLinks[i].parentElement;
                    li.classList.toggle('active', subLinks[i].getAttribute('data-section') === sectionKey);
                }
            });
        }, {
            root: mgmtScrollContainer,
            rootMargin: '0px 0px -60% 0px',
            threshold: 0
        });

        for (var si = 0; si < scrollItems.length; si++) {
            observer.observe(scrollItems[si]);
        }
    })();

    // --- Floating sticky header for current section ---
    /**
    * Initializes and updates a floating header showing the title and description of the last section header scrolled past the top of a managed scroll container.
    * @example
    * initFloatingHeader()
    * undefined
    * @param {HTMLElement|null} mgmtScrollContainer - Global scroll container element referenced by the function; if falsy the function returns early.
    * @returns {void} No return value.
    **/
    (function initFloatingHeader() {
        if (!mgmtScrollContainer) return;
        var fh = document.getElementById('mgmtFloatingHeader');
        var fhTitle = document.getElementById('mgmtFhTitle');
        var fhDesc = document.getElementById('mgmtFhDesc');
        if (!fh || !fhTitle || !fhDesc) return;

        var scrollItems = mgmtScrollContainer.querySelectorAll('.mgmt-scroll-item');
        if (!scrollItems.length) return;

        mgmtScrollContainer.addEventListener('scroll', function () {
            var scrollTop = mgmtScrollContainer.scrollTop;
            var currentItem = null;

            // Find which section's header has scrolled past the top
            for (var i = 0; i < scrollItems.length; i++) {
                var item = scrollItems[i];
                var itemTop = item.offsetTop - mgmtScrollContainer.offsetTop;
                var header = item.querySelector('.mgmt-section-header');
                var headerH = header ? header.offsetHeight : 0;

                // If the section header has scrolled above the viewport
                if (scrollTop > itemTop + headerH) {
                    currentItem = item;
                } else {
                    break;
                }
            }

            if (currentItem) {
                var header = currentItem.querySelector('.mgmt-section-header');
                var title = header ? header.querySelector('.mgmt-section-title') : null;
                var desc = header ? header.querySelector('.mgmt-section-desc') : null;
                fhTitle.textContent = title ? title.textContent : '';
                fhDesc.textContent = desc ? desc.textContent : '';
                fh.classList.add('visible');
            } else {
                fh.classList.remove('visible');
            }
        });
    })();

    // --- Logo Upload with Image Editor ---
    var logoUploadArea = document.getElementById('logoUploadArea');
    var logoFileInput = document.getElementById('logoFileInput');
    var logoPreviewImg = document.getElementById('logoPreviewImg');
    var logoPlaceholder = document.getElementById('logoPlaceholder');
    var logoRemoveBtn = document.getElementById('logoRemoveBtn');

    // Image Editor elements
    var imgEditorOverlay = document.getElementById('imgEditorOverlay');
    var imgEditorCanvas = document.getElementById('imgEditorCanvas');
    var imgEditorClose = document.getElementById('imgEditorClose');
    var imgEditorCancel = document.getElementById('imgEditorCancel');
    var imgEditorUpload = document.getElementById('imgEditorUpload');
    var brightnessSlider = document.getElementById('brightnessSlider');
    var brightnessVal = document.getElementById('brightnessVal');

    // Remove Logo Modal elements
    var removeLogoModal = document.getElementById('removeLogoModal');
    var removeLogoCancel = document.getElementById('removeLogoCancel');
    var removeLogoConfirm = document.getElementById('removeLogoConfirm');

    // Additional editor elements
    var rotationSlider = document.getElementById('rotationSlider');
    var rotationVal = document.getElementById('rotationVal');
    var contrastSlider = document.getElementById('contrastSlider');
    var contrastVal = document.getElementById('contrastVal');
    var cropOverlay = document.getElementById('cropOverlay');
    var cropSelection = document.getElementById('cropSelection');
    var cropActionBar = document.getElementById('cropActionBar');
    var cropCancelBtn = document.getElementById('cropCancelBtn');
    var cropApplyBtn = document.getElementById('cropApplyBtn');

    // Editor state
    var editorState = {
        originalImg: null,
        rotation: 0,
        flipH: false,
        brightness: 100,
        contrast: 100,
        cropMode: false,
        cropRect: null
    };

    // Crop drag state
    var cropDrag = { active: false, startX: 0, startY: 0 };

    /**
    * Reset the editor state and associated UI controls to their default values and exit crop mode.
    * @example
    * resetEditorState()
    * undefined
    * @returns {void} No return value.
    **/
    function resetEditorState() {
        editorState.rotation = 0;
        editorState.flipH = false;
        editorState.brightness = 100;
        editorState.contrast = 100;
        editorState.cropMode = false;
        editorState.cropRect = null;
        if (brightnessSlider) brightnessSlider.value = 100;
        if (brightnessVal) brightnessVal.textContent = '100%';
        if (rotationSlider) rotationSlider.value = 0;
        if (rotationVal) rotationVal.textContent = '0°';
        if (contrastSlider) contrastSlider.value = 100;
        if (contrastVal) contrastVal.textContent = '100%';
        exitCropMode();
        // Remove active class from crop btn
        var cropBtn = document.querySelector('[data-action="crop"]');
        if (cropBtn) cropBtn.classList.remove('active');
    }

    /**
    * Renders the current editor image onto the editor canvas applying rotation, horizontal flip, automatic scaling and brightness/contrast filters.
    * @example
    * renderEditorCanvas()
    * undefined
    * @param {{void}} {{none}} - No arguments; the function reads global imgEditorCanvas and editorState.
    * @returns {{undefined}} undefined - No return value; updates the canvas pixel content.
    **/
    function renderEditorCanvas() {
        if (!imgEditorCanvas || !editorState.originalImg) return;
        var img = editorState.originalImg;
        var ctx = imgEditorCanvas.getContext('2d');
        var radians = editorState.rotation * Math.PI / 180;
        var cos = Math.abs(Math.cos(radians));
        var sin = Math.abs(Math.sin(radians));
        var w = Math.round(img.width * cos + img.height * sin);
        var h = Math.round(img.width * sin + img.height * cos);

        // Scale down if too large
        var maxW = 440, maxH = 280;
        var scale = Math.min(maxW / w, maxH / h, 1);
        w = Math.round(w * scale);
        h = Math.round(h * scale);

        imgEditorCanvas.width = w;
        imgEditorCanvas.height = h;

        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.translate(w / 2, h / 2);
        ctx.rotate(radians);
        if (editorState.flipH) ctx.scale(-1, 1);

        var drawW = Math.round(img.width * scale);
        var drawH = Math.round(img.height * scale);
        ctx.filter = 'brightness(' + editorState.brightness + '%) contrast(' + editorState.contrast + '%)';
        ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
        ctx.restore();
    }

    /**
    * Enable crop mode: shows the crop overlay and action bar, activates the crop button, and initializes a centered crop selection (60% of the canvas by default).
    * @example
    * enterCropMode()
    * undefined
    * @returns {void} No return value.
    **/
    function enterCropMode() {
        editorState.cropMode = true;
        if (cropOverlay) cropOverlay.style.display = 'block';
        if (cropActionBar) cropActionBar.style.display = 'flex';
        // Init crop selection to center 60%
        var canvas = imgEditorCanvas;
        if (canvas && cropSelection) {
            var cw = canvas.offsetWidth;
            var ch = canvas.offsetHeight;
            var margin = 0.2;
            cropSelection.style.left = Math.round(cw * margin) + 'px';
            cropSelection.style.top = Math.round(ch * margin) + 'px';
            cropSelection.style.width = Math.round(cw * (1 - 2 * margin)) + 'px';
            cropSelection.style.height = Math.round(ch * (1 - 2 * margin)) + 'px';
        }
        var cropBtn = document.querySelector('[data-action="crop"]');
        if (cropBtn) cropBtn.classList.add('active');
    }

    function exitCropMode() {
        editorState.cropMode = false;
        if (cropOverlay) cropOverlay.style.display = 'none';
        if (cropActionBar) cropActionBar.style.display = 'none';
        var cropBtn = document.querySelector('[data-action="crop"]');
        if (cropBtn) cropBtn.classList.remove('active');
    }

    /**
    * Apply the current crop selection to the editor canvas, create a new cropped image, replace the editor image, reset transforms, re-render the canvas and exit crop mode.
    * @example
    * applyCrop()
    * undefined
    * @param {void} none - No parameters.
    * @returns {void} Does not return a value; updates editor state and UI.
    **/
    function applyCrop() {
        if (!imgEditorCanvas || !cropSelection) return;
        var canvas = imgEditorCanvas;

        // Get crop selection position relative to the canvas
        var selLeft = cropSelection.offsetLeft;
        var selTop = cropSelection.offsetTop;
        var selW = cropSelection.offsetWidth;
        var selH = cropSelection.offsetHeight;

        // Convert overlay coords to canvas pixel coords
        var scaleX = canvas.width / canvas.offsetWidth;
        var scaleY = canvas.height / canvas.offsetHeight;

        // Crop selection is positioned relative to overlay, adjust for canvas offset within overlay
        var cRect = canvas.getBoundingClientRect();
        var oRect = cropOverlay.getBoundingClientRect();
        var offsetX = cRect.left - oRect.left;
        var offsetY = cRect.top - oRect.top;

        var sx = Math.max(0, Math.round((selLeft - offsetX) * scaleX));
        var sy = Math.max(0, Math.round((selTop - offsetY) * scaleY));
        var sw = Math.round(selW * scaleX);
        var sh = Math.round(selH * scaleY);

        // Clamp
        sx = Math.min(sx, canvas.width - 1);
        sy = Math.min(sy, canvas.height - 1);
        sw = Math.min(sw, canvas.width - sx);
        sh = Math.min(sh, canvas.height - sy);

        if (sw < 5 || sh < 5) return;

        // Extract cropped area
        var ctx = canvas.getContext('2d');
        var imageData = ctx.getImageData(sx, sy, sw, sh);

        // Create new image from cropped data
        var tempCanvas = document.createElement('canvas');
        tempCanvas.width = sw;
        tempCanvas.height = sh;
        tempCanvas.getContext('2d').putImageData(imageData, 0, 0);

        // Replace originalImg with cropped result
        var croppedImg = new Image();
        croppedImg.onload = function () {
            editorState.originalImg = croppedImg;
            editorState.rotation = 0;
            editorState.flipH = false;
            if (rotationSlider) rotationSlider.value = 0;
            if (rotationVal) rotationVal.textContent = '0°';
            renderEditorCanvas();
            exitCropMode();
        };
        croppedImg.src = tempCanvas.toDataURL('image/png');
    }

    function openImageEditor(imgSrc) {
        resetEditorState();
        var img = new Image();
        img.onload = function () {
            editorState.originalImg = img;
            renderEditorCanvas();
            if (imgEditorOverlay) imgEditorOverlay.classList.add('visible');
        };
        img.src = imgSrc;
    }

    function closeImageEditor() {
        if (imgEditorOverlay) imgEditorOverlay.classList.remove('visible');
        editorState.originalImg = null;
        exitCropMode();
        if (logoFileInput) logoFileInput.value = '';
    }

    /**
    * Apply the image currently edited on the canvas as the active logo, update the preview and relevant UI elements, and close the image editor.
    * @example
    * applyLogoFromEditor()
    * undefined
    * @returns {void} No return value.
    */
    function applyLogoFromEditor() {
        if (!imgEditorCanvas) return;
        var dataUrl = imgEditorCanvas.toDataURL('image/png');
        if (logoPreviewImg) {
            logoPreviewImg.src = dataUrl;
            logoPreviewImg.style.display = 'block';
        }
        if (logoPlaceholder) logoPlaceholder.style.display = 'none';
        if (logoRemoveBtn) logoRemoveBtn.style.display = 'flex';

        var slipLogo = document.getElementById('slipLogoArea');
        if (slipLogo) {
            slipLogo.innerHTML = '<img src="' + dataUrl + '" style="width:28px;height:28px;border-radius:4px;object-fit:contain;" alt="Logo">';
        }

        markSlipDirty();
        closeImageEditor();
    }

    // Click upload area → open file picker
    if (logoUploadArea && logoFileInput) {
        logoUploadArea.addEventListener('click', function () {
            logoFileInput.click();
        });

        logoFileInput.addEventListener('change', function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function (ev) {
                    openImageEditor(ev.target.result);
                };
                reader.readAsDataURL(this.files[0]);
            }
        });
    }

    // Editor toolbar button actions
    var editorToolBtns = document.querySelectorAll('.editor-tool-btn');
    for (var eb = 0; eb < editorToolBtns.length; eb++) {
        editorToolBtns[eb].addEventListener('click', function () {
            var action = this.getAttribute('data-action');
            if (action === 'mirror') {
                editorState.flipH = !editorState.flipH;
                renderEditorCanvas();
            } else if (action === 'crop') {
                if (editorState.cropMode) {
                    exitCropMode();
                } else {
                    enterCropMode();
                }
            } else if (action === 'reset') {
                var img = editorState.originalImg;
                resetEditorState();
                editorState.originalImg = img;
                renderEditorCanvas();
            }
        });
    }

    // Rotation slider
    if (rotationSlider) {
        rotationSlider.addEventListener('input', function () {
            editorState.rotation = parseInt(this.value, 10);
            if (rotationVal) rotationVal.textContent = this.value + '°';
            renderEditorCanvas();
        });
    }

    // Brightness slider
    if (brightnessSlider) {
        brightnessSlider.addEventListener('input', function () {
            editorState.brightness = parseInt(this.value, 10);
            if (brightnessVal) brightnessVal.textContent = this.value + '%';
            renderEditorCanvas();
        });
    }

    // Contrast slider
    if (contrastSlider) {
        contrastSlider.addEventListener('input', function () {
            editorState.contrast = parseInt(this.value, 10);
            if (contrastVal) contrastVal.textContent = this.value + '%';
            renderEditorCanvas();
        });
    }

    // Crop drag to select
    if (cropOverlay) {
        cropOverlay.addEventListener('mousedown', function (e) {
            if (e.target.classList.contains('crop-handle')) return;
            var rect = cropOverlay.getBoundingClientRect();
            cropDrag.active = true;
            cropDrag.startX = e.clientX - rect.left;
            cropDrag.startY = e.clientY - rect.top;
            if (cropSelection) {
                cropSelection.style.left = cropDrag.startX + 'px';
                cropSelection.style.top = cropDrag.startY + 'px';
                cropSelection.style.width = '0px';
                cropSelection.style.height = '0px';
            }
            e.preventDefault();
        });

        cropOverlay.addEventListener('mousemove', function (e) {
            if (!cropDrag.active || !cropSelection) return;
            var rect = cropOverlay.getBoundingClientRect();
            var curX = e.clientX - rect.left;
            var curY = e.clientY - rect.top;
            var x = Math.min(cropDrag.startX, curX);
            var y = Math.min(cropDrag.startY, curY);
            var w = Math.abs(curX - cropDrag.startX);
            var h = Math.abs(curY - cropDrag.startY);
            cropSelection.style.left = x + 'px';
            cropSelection.style.top = y + 'px';
            cropSelection.style.width = w + 'px';
            cropSelection.style.height = h + 'px';
        });

        cropOverlay.addEventListener('mouseup', function () {
            cropDrag.active = false;
        });

        // Touch support
        cropOverlay.addEventListener('touchstart', function (e) {
            if (e.target.classList.contains('crop-handle')) return;
            var touch = e.touches[0];
            var rect = cropOverlay.getBoundingClientRect();
            cropDrag.active = true;
            cropDrag.startX = touch.clientX - rect.left;
            cropDrag.startY = touch.clientY - rect.top;
            if (cropSelection) {
                cropSelection.style.left = cropDrag.startX + 'px';
                cropSelection.style.top = cropDrag.startY + 'px';
                cropSelection.style.width = '0px';
                cropSelection.style.height = '0px';
            }
            e.preventDefault();
        }, { passive: false });

        cropOverlay.addEventListener('touchmove', function (e) {
            if (!cropDrag.active || !cropSelection) return;
            var touch = e.touches[0];
            var rect = cropOverlay.getBoundingClientRect();
            var curX = touch.clientX - rect.left;
            var curY = touch.clientY - rect.top;
            var x = Math.min(cropDrag.startX, curX);
            var y = Math.min(cropDrag.startY, curY);
            var w = Math.abs(curX - cropDrag.startX);
            var h = Math.abs(curY - cropDrag.startY);
            cropSelection.style.left = x + 'px';
            cropSelection.style.top = y + 'px';
            cropSelection.style.width = w + 'px';
            cropSelection.style.height = h + 'px';
            e.preventDefault();
        }, { passive: false });

        cropOverlay.addEventListener('touchend', function () {
            cropDrag.active = false;
        });
    }

    // Crop cancel/apply
    if (cropCancelBtn) cropCancelBtn.addEventListener('click', exitCropMode);
    if (cropApplyBtn) cropApplyBtn.addEventListener('click', applyCrop);

    // Editor close/cancel/upload
    if (imgEditorClose) imgEditorClose.addEventListener('click', closeImageEditor);
    if (imgEditorCancel) imgEditorCancel.addEventListener('click', closeImageEditor);
    if (imgEditorUpload) imgEditorUpload.addEventListener('click', applyLogoFromEditor);

    // Close editor on overlay click
    if (imgEditorOverlay) {
        imgEditorOverlay.addEventListener('click', function (e) {
            if (e.target === imgEditorOverlay) closeImageEditor();
        });
    }

    // Close editor on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && imgEditorOverlay && imgEditorOverlay.classList.contains('visible')) {
            if (editorState.cropMode) {
                exitCropMode();
            } else {
                closeImageEditor();
            }
        }
    });

    // --- Remove Logo ---
    if (logoRemoveBtn) {
        logoRemoveBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (removeLogoModal) removeLogoModal.classList.add('visible');
        });
    }

    if (removeLogoCancel) {
        removeLogoCancel.addEventListener('click', function () {
            if (removeLogoModal) removeLogoModal.classList.remove('visible');
        });
    }

    if (removeLogoConfirm) {
        removeLogoConfirm.addEventListener('click', function () {
            // Reset logo
            if (logoPreviewImg) {
                logoPreviewImg.src = '';
                logoPreviewImg.style.display = 'none';
            }
            if (logoPlaceholder) logoPlaceholder.style.display = 'flex';
            if (logoRemoveBtn) logoRemoveBtn.style.display = 'none';
            if (logoFileInput) logoFileInput.value = '';

            // Reset slip preview logo
            var slipLogo = document.getElementById('slipLogoArea');
            if (slipLogo) {
                slipLogo.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#93b8d7" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>';
            }

            markSlipDirty();
            if (removeLogoModal) removeLogoModal.classList.remove('visible');
        });
    }

    // Close remove modal on overlay click
    if (removeLogoModal) {
        removeLogoModal.addEventListener('click', function (e) {
            if (e.target === removeLogoModal) removeLogoModal.classList.remove('visible');
        });
    }

    // --- Live Preview Updates (all fields) ---
    var companyNameInput = document.getElementById('companyName');
    var companyAddressInput = document.getElementById('companyAddress');
    var companyContactInput = document.getElementById('companyContact');
    var companyEmailInput = document.getElementById('companyEmail');
    var slipCompanyName = document.getElementById('slipCompanyName');
    var slipCompanyAddress = document.getElementById('slipCompanyAddress');
    var slipCompanyContact = document.getElementById('slipCompanyContact');

    function updateSlipContactLine() {
        if (!slipCompanyContact) return;
        var contact = companyContactInput ? companyContactInput.value : '';
        var email = companyEmailInput ? companyEmailInput.value : '';
        var parts = [];
        if (contact) parts.push(contact);
        if (email) parts.push(email);
        slipCompanyContact.textContent = parts.join(' | ') || '';
    }

    if (companyNameInput && slipCompanyName) {
        companyNameInput.addEventListener('input', function () {
            slipCompanyName.textContent = this.value || 'Company Name';
        });
    }

    if (companyAddressInput && slipCompanyAddress) {
        companyAddressInput.addEventListener('input', function () {
            slipCompanyAddress.textContent = this.value || 'Company Address';
        });
    }

    if (companyContactInput) {
        companyContactInput.addEventListener('input', updateSlipContactLine);
    }
    if (companyEmailInput) {
        companyEmailInput.addEventListener('input', updateSlipContactLine);
    }

    // --- Month/Year constants for PDF ---
    var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // --- Unsaved Changes Tracking ---
    var saveBtn = document.getElementById('saveCompanyDetails');
    var slipDirty = false;
    var shiftsDirty = false;
    var attendanceDirty = false;
    var hardwareDirty = false;
    var payrollDirty = false;
    var pendingNavAction = null;
    var pendingDirtySource = null;
    var unsavedModal = document.getElementById('unsavedModal');
    var unsavedCancelBtn = document.getElementById('unsavedCancelBtn');
    var unsavedCloseBtn = document.getElementById('unsavedCloseBtn');
    var unsavedDiscardBtn = document.getElementById('unsavedDiscard');
    var unsavedModalText = unsavedModal ? unsavedModal.querySelector('.unsaved-modal-text') : null;

    // -- Salary Slip dirty tracking --
    function markSlipDirty() {
        slipDirty = true;
    }

    var slipInputs = [companyNameInput, companyAddressInput, companyContactInput, companyEmailInput];
    for (var di = 0; di < slipInputs.length; di++) {
        if (slipInputs[di]) {
            slipInputs[di].addEventListener('input', markSlipDirty);
        }
    }
    var allSlipToggles = document.querySelectorAll('#sectionSalarySlip .toggle-switch input');
    for (var ti = 0; ti < allSlipToggles.length; ti++) {
        allSlipToggles[ti].addEventListener('change', markSlipDirty);
    }

    // -- Shifts dirty tracking --
    var advanceShiftToggle = document.getElementById('advanceShiftToggle');
    var shiftsInitialState = advanceShiftToggle ? advanceShiftToggle.checked : false;

    if (advanceShiftToggle) {
        advanceShiftToggle.addEventListener('change', function () {
            shiftsDirty = this.checked !== shiftsInitialState;
        });
    }

    function doShiftsSave() {
        shiftsDirty = false;
        shiftsInitialState = advanceShiftToggle ? advanceShiftToggle.checked : false;
    }

    function resetShiftsState() {
        if (advanceShiftToggle) advanceShiftToggle.checked = shiftsInitialState;
        shiftsDirty = false;
    }

    // -- Attendance dirty tracking --
    var regToggle = document.getElementById('enableRegularizationToggle');
    var regLimitCard = document.getElementById('regularizationLimitCard');
    var regLimitInput = document.getElementById('regularizationLimitInput');
    var regLimitError = document.getElementById('regularizationLimitError');
    var attendanceInitialToggle = regToggle ? regToggle.checked : false;
    var attendanceInitialLimit = regLimitInput ? regLimitInput.value : '';

    function updateRegLimitVisibility() {
        if (regLimitCard) {
            regLimitCard.style.display = regToggle && regToggle.checked ? '' : 'none';
        }
    }

    function checkAttendanceDirty() {
        if (!regToggle) return;
        var toggleChanged = regToggle.checked !== attendanceInitialToggle;
        var limitChanged = regLimitInput ? regLimitInput.value !== attendanceInitialLimit : false;
        attendanceDirty = toggleChanged || limitChanged;
    }

    if (regToggle) {
        regToggle.addEventListener('change', function () {
            updateRegLimitVisibility();
            // Clear validation when toggling off
            if (!this.checked && regLimitInput) {
                regLimitInput.classList.remove('input-error');
                if (regLimitError) regLimitError.classList.remove('visible');
            }
            checkAttendanceDirty();
        });
    }

    if (regLimitInput) {
        regLimitInput.addEventListener('input', function () {
            // Clear error on typing
            this.classList.remove('input-error');
            if (regLimitError) regLimitError.classList.remove('visible');
            checkAttendanceDirty();
        });
    }

    /**
    * Validate attendance registration inputs, save initial toggle/limit state, and return whether the save succeeded.
    * @example
    * doAttendanceSave()
    * true
    * @returns {{boolean}} True if data saved (valid), false if validation failed due to missing limit when required.
    */
    function doAttendanceSave() {
        // Validate: if toggle is on, limit must have a value
        if (regToggle && regToggle.checked && regLimitInput && !regLimitInput.value.trim()) {
            regLimitInput.classList.add('input-error');
            if (regLimitError) regLimitError.classList.add('visible');
            regLimitInput.focus();
            return false;
        }
        attendanceDirty = false;
        attendanceInitialToggle = regToggle ? regToggle.checked : false;
        attendanceInitialLimit = regLimitInput ? regLimitInput.value : '';
        return true;
    }

    function resetAttendanceState() {
        if (regToggle) regToggle.checked = attendanceInitialToggle;
        if (regLimitInput) {
            regLimitInput.value = attendanceInitialLimit;
            regLimitInput.classList.remove('input-error');
        }
        if (regLimitError) regLimitError.classList.remove('visible');
        updateRegLimitVisibility();
        attendanceDirty = false;
    }

    // -- Hardware dirty tracking --
    var syncTimePicker = document.getElementById('deviceSyncTimePicker');
    var syncTimeInput = document.getElementById('deviceSyncTimeInput');
    var syncTimeDropdown = document.getElementById('syncTimeDropdown');
    var syncTimeList = document.getElementById('syncTimeList');
    var hardwareInitialTime = syncTimeInput ? syncTimeInput.value : '1:00 PM';

    // Populate time options (every 30 min)
    /**
    * Build and populate a list of 30-minute interval time option elements (12-hour format) inside the global syncTimeList element, selecting the option matching hardwareInitialTime.
    * @example
    * buildTimeOptions()
    * undefined
    * @param {{void}} {{none}} - No parameters; the function reads global variables (syncTimeList, hardwareInitialTime).
    * @returns {{void}} Updates the DOM by setting syncTimeList.innerHTML and returns nothing.
    **/
    (function buildTimeOptions() {
        if (!syncTimeList) return;
        var html = '';
        for (var h = 0; h < 24; h++) {
            for (var m = 0; m < 60; m += 30) {
                var hr12 = h === 0 ? 12 : (h > 12 ? h - 12 : h);
                var ampm = h < 12 ? 'AM' : 'PM';
                var mm = m === 0 ? '00' : '30';
                var label = hr12 + ':' + mm + ' ' + ampm;
                var sel = label === hardwareInitialTime ? ' selected' : '';
                html += '<div class="mgmt-time-option' + sel + '" data-time="' + label + '">' + label + '</div>';
            }
        }
        syncTimeList.innerHTML = html;
    })();

    // Toggle dropdown
    if (syncTimePicker) {
        syncTimePicker.addEventListener('click', function (e) {
            if (e.target.closest('.mgmt-time-dropdown')) return;
            var isOpen = syncTimeDropdown && syncTimeDropdown.classList.contains('open');
            if (isOpen) {
                syncTimeDropdown.classList.remove('open');
                syncTimePicker.classList.remove('open');
            } else {
                if (syncTimeDropdown) syncTimeDropdown.classList.add('open');
                syncTimePicker.classList.add('open');
                // Scroll to selected
                var sel = syncTimeList ? syncTimeList.querySelector('.selected') : null;
                if (sel) sel.scrollIntoView({ block: 'center' });
            }
        });
    }

    // Select a time
    if (syncTimeList) {
        syncTimeList.addEventListener('click', function (e) {
            var opt = e.target.closest('.mgmt-time-option');
            if (!opt) return;
            var prev = syncTimeList.querySelector('.selected');
            if (prev) prev.classList.remove('selected');
            opt.classList.add('selected');
            if (syncTimeInput) syncTimeInput.value = opt.getAttribute('data-time');
            if (syncTimeDropdown) syncTimeDropdown.classList.remove('open');
            if (syncTimePicker) syncTimePicker.classList.remove('open');
            hardwareDirty = syncTimeInput.value !== hardwareInitialTime;
        });
    }

    // Close dropdown on outside click
    document.addEventListener('click', function (e) {
        if (syncTimePicker && !syncTimePicker.contains(e.target)) {
            if (syncTimeDropdown) syncTimeDropdown.classList.remove('open');
            syncTimePicker.classList.remove('open');
        }
    });

    function doHardwareSave() {
        hardwareDirty = false;
        hardwareInitialTime = syncTimeInput ? syncTimeInput.value : '1:00 PM';
    }

    function resetHardwareState() {
        if (syncTimeInput) syncTimeInput.value = hardwareInitialTime;
        if (syncTimeList) {
            var opts = syncTimeList.querySelectorAll('.mgmt-time-option');
            for (var i = 0; i < opts.length; i++) {
                opts[i].classList.toggle('selected', opts[i].getAttribute('data-time') === hardwareInitialTime);
            }
        }
        hardwareDirty = false;
    }

    // -- Payroll Management --

    // Payroll Advance toggle with confirmation modal
    var payrollAdvanceToggle = document.getElementById('payrollAdvanceToggle');
    var payrollTypeModal = document.getElementById('payrollTypeModal');
    var payrollTypeCancelBtn = document.getElementById('payrollTypeCancelBtn');
    var payrollTypeCloseBtn = document.getElementById('payrollTypeCloseBtn');
    var payrollTypeDoneBtn = document.getElementById('payrollTypeDoneBtn');
    var payrollDateError = document.getElementById('payrollDateError');

    // Mini Calendar Picker
    var miniCalWrap = document.getElementById('miniCalWrap');
    var miniCalTrigger = document.getElementById('miniCalTrigger');
    var miniCalDropdown = document.getElementById('miniCalDropdown');
    var miniCalGrid = document.getElementById('miniCalGrid');
    var miniCalMonthLabel = document.getElementById('miniCalMonthLabel');
    var miniCalPrev = document.getElementById('miniCalPrev');
    var miniCalNext = document.getElementById('miniCalNext');
    var miniCalText = document.getElementById('miniCalText');

    var MC_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var MC_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var mcNow = new Date();
    var mcViewMonth = mcNow.getMonth();
    var mcViewYear = mcNow.getFullYear();
    var mcSelectedDate = null;

    /**
    * Render the mini calendar UI for the current view month/year, populating day buttons and highlighting today and the selected date.
    * @example
    * mcRender()
    * undefined
    * @returns {void} Updates the mini calendar DOM (no return value).
    **/
    function mcRender() {
        if (!miniCalGrid || !miniCalMonthLabel) return;
        miniCalMonthLabel.textContent = MC_MONTHS[mcViewMonth] + ' ' + mcViewYear;

        var firstDay = new Date(mcViewYear, mcViewMonth, 1).getDay();
        var daysInMonth = new Date(mcViewYear, mcViewMonth + 1, 0).getDate();
        var today = new Date();
        var todayStr = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var selStr = mcSelectedDate ? mcSelectedDate.getFullYear() + '-' + (mcSelectedDate.getMonth() + 1) + '-' + mcSelectedDate.getDate() : '';

        var html = '';
        // Empty cells for days before the 1st
        for (var e = 0; e < firstDay; e++) {
            html += '<button type="button" class="mini-cal-day empty" disabled></button>';
        }
        for (var d = 1; d <= daysInMonth; d++) {
            var dateStr = mcViewYear + '-' + (mcViewMonth + 1) + '-' + d;
            var cls = 'mini-cal-day';
            if (dateStr === todayStr) cls += ' today';
            if (dateStr === selStr) cls += ' selected';
            html += '<button type="button" class="' + cls + '" data-day="' + d + '">' + d + '</button>';
        }
        miniCalGrid.innerHTML = html;
    }

    function mcOpen() {
        if (miniCalDropdown) miniCalDropdown.classList.add('open');
        if (miniCalTrigger) miniCalTrigger.classList.add('open');
    }

    function mcClose() {
        if (miniCalDropdown) miniCalDropdown.classList.remove('open');
        if (miniCalTrigger) miniCalTrigger.classList.remove('open');
    }

    var ptmFutureBanner = document.getElementById('ptmFutureBanner');
    var ptmFutureText = document.getElementById('ptmFutureText');

    /**
    * Selects a day in the mini calendar, updates the selected date, UI elements, future-date banner, re-renders and auto-closes the calendar.
    * @example
    * mcSelectDay(15)
    * undefined
    * @param {number} day - Day of the month to select.
    * @returns {void} Updates internal state and UI; does not return a value.
    */
    function mcSelectDay(day) {
        mcSelectedDate = new Date(mcViewYear, mcViewMonth, day);
        var label = day + ' ' + MC_SHORT[mcViewMonth] + ' ' + mcViewYear;
        if (miniCalText) {
            miniCalText.textContent = label;
            miniCalText.classList.add('has-value');
        }
        if (miniCalTrigger) miniCalTrigger.classList.remove('has-error');
        if (payrollDateError) payrollDateError.classList.remove('visible');

        // Show future date banner
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var sel = new Date(mcSelectedDate);
        sel.setHours(0, 0, 0, 0);
        if (ptmFutureBanner) {
            if (sel > today) {
                var fullLabel = day + ' ' + MC_MONTHS[mcViewMonth] + ' ' + mcViewYear;
                ptmFutureText.innerHTML = '<strong>Advanced Payroll</strong> (with compliance) will take effect from <span class="ptm-hl-date">' + fullLabel + '</span>. Current <strong>Basic Payroll</strong> will remain active <span class="ptm-hl-until">until then</span>.';
                ptmFutureBanner.style.display = '';
            } else {
                ptmFutureBanner.style.display = 'none';
            }
        }

        mcRender();
        // Auto-close after selection
        setTimeout(mcClose, 150);
    }

    /**
    * Reset the mini calendar to its initial state: clears any selected date, sets the view to the current month and year, updates/remove UI text and classes, hides the future banner, closes the calendar overlay and re-renders the calendar.
    * @example
    * mcReset()
    * undefined
    * @returns {void} No return value.
    */
    function mcReset() {
        mcSelectedDate = null;
        mcViewMonth = mcNow.getMonth();
        mcViewYear = mcNow.getFullYear();
        if (miniCalText) {
            miniCalText.textContent = 'Select a date';
            miniCalText.classList.remove('has-value');
        }
        if (miniCalTrigger) miniCalTrigger.classList.remove('has-error', 'open');
        if (ptmFutureBanner) ptmFutureBanner.style.display = 'none';
        mcClose();
        mcRender();
    }

    if (miniCalTrigger) {
        miniCalTrigger.addEventListener('click', function () {
            var isOpen = miniCalDropdown && miniCalDropdown.classList.contains('open');
            if (isOpen) {
                mcClose();
            } else {
                mcRender();
                mcOpen();
            }
        });
    }

    if (miniCalPrev) {
        miniCalPrev.addEventListener('click', function (e) {
            e.stopPropagation();
            mcViewMonth--;
            if (mcViewMonth < 0) { mcViewMonth = 11; mcViewYear--; }
            mcRender();
        });
    }

    if (miniCalNext) {
        miniCalNext.addEventListener('click', function (e) {
            e.stopPropagation();
            mcViewMonth++;
            if (mcViewMonth > 11) { mcViewMonth = 0; mcViewYear++; }
            mcRender();
        });
    }

    if (miniCalGrid) {
        miniCalGrid.addEventListener('click', function (e) {
            var btn = e.target.closest('.mini-cal-day');
            if (!btn || btn.classList.contains('empty') || btn.classList.contains('disabled')) return;
            mcSelectDay(parseInt(btn.getAttribute('data-day'), 10));
        });
    }

    // Close calendar on outside click
    document.addEventListener('click', function (e) {
        if (miniCalWrap && !miniCalWrap.contains(e.target)) {
            mcClose();
        }
    });

    // Modal show/hide/cancel
    function showPayrollTypeModal() {
        mcReset();
        if (payrollDateError) payrollDateError.classList.remove('visible');
        if (payrollTypeModal) payrollTypeModal.classList.add('visible');
    }

    function hidePayrollTypeModal() {
        mcClose();
        if (payrollTypeModal) payrollTypeModal.classList.remove('visible');
    }

    function cancelPayrollType() {
        if (payrollAdvanceToggle) payrollAdvanceToggle.checked = false;
        hidePayrollTypeModal();
    }

    if (payrollAdvanceToggle) {
        payrollAdvanceToggle.addEventListener('change', function () {
            if (this.checked) {
                showPayrollTypeModal();
            }
            payrollDirty = true;
        });
    }

    if (payrollTypeCancelBtn) {
        payrollTypeCancelBtn.addEventListener('click', cancelPayrollType);
    }

    if (payrollTypeCloseBtn) {
        payrollTypeCloseBtn.addEventListener('click', cancelPayrollType);
    }

    if (payrollTypeModal) {
        payrollTypeModal.addEventListener('click', function (e) {
            if (e.target === payrollTypeModal) cancelPayrollType();
        });
    }

    if (payrollTypeDoneBtn) {
        payrollTypeDoneBtn.addEventListener('click', function () {
            if (!mcSelectedDate) {
                if (miniCalTrigger) miniCalTrigger.classList.add('has-error');
                if (payrollDateError) payrollDateError.classList.add('visible');
                return;
            }
            hidePayrollTypeModal();
            payrollDirty = true;
        });
    }

    // Dropdown conditional fields
    var workingHourType = document.getElementById('workingHourType');
    var workingHourShiftFields = document.getElementById('workingHourShiftFields');
    var workingHourFixedFields = document.getElementById('workingHourFixedFields');

    var offDayType = document.getElementById('offDayType');
    var offDayMonetaryFields = document.getElementById('offDayMonetaryFields');

    var dailyWageType = document.getElementById('dailyWageType');
    var dailyWageSpecificFields = document.getElementById('dailyWageSpecificFields');

    var overtimeType = document.getElementById('overtimeType');
    var overtimeMultiplierRow = document.getElementById('overtimeMultiplierRow');
    var overtimeTotalHoursField = document.getElementById('overtimeTotalHoursField');

    // Penalty toggles
    var fullDayPenaltyToggle = document.getElementById('fullDayPenaltyToggle');
    var fullDayPenaltyFields = document.getElementById('fullDayPenaltyFields');
    var halfDayPenaltyToggle = document.getElementById('halfDayPenaltyToggle');
    var halfDayPenaltyFields = document.getElementById('halfDayPenaltyFields');
    var lateComingPenaltyToggle = document.getElementById('lateComingPenaltyToggle');
    var lateComingPenaltyFields = document.getElementById('lateComingPenaltyFields');

    // Sync segmented toggle active states
    function syncOptionCards(container, value) {
        if (!container) return;
        var btns = container.querySelectorAll('.seg-btn');
        for (var i = 0; i < btns.length; i++) {
            if (btns[i].getAttribute('data-value') === value) {
                btns[i].classList.add('active');
            } else {
                btns[i].classList.remove('active');
            }
        }
    }

    // Bind segmented toggle clicks
    function bindOptionCards(container, hiddenInput, updateFn) {
        if (!container) return;
        var btns = container.querySelectorAll('.seg-btn');
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function () {
                if (hiddenInput) hiddenInput.value = this.getAttribute('data-value');
                updateFn();
                payrollDirty = true;
            });
        }
    }

    var offDayOptionsEl = document.getElementById('offDayOptions');
    var dailyWageOptionsEl = document.getElementById('dailyWageOptions');
    var overtimeOptionsEl = document.getElementById('overtimeOptions');

    function updateWorkingHourFields() {
        if (!workingHourType) return;
        var val = workingHourType.value;
        if (workingHourShiftFields) workingHourShiftFields.style.display = val === 'shiftWise' ? '' : 'none';
        if (workingHourFixedFields) workingHourFixedFields.style.display = val === 'fixed' ? '' : 'none';
        syncOptionCards(workingHourType.parentElement, val);
    }

    function updateOffDayFields() {
        if (!offDayType) return;
        var val = offDayType.value;
        if (offDayMonetaryFields) offDayMonetaryFields.style.display = val === 'monetary' ? '' : 'none';
        syncOptionCards(offDayOptionsEl, val);
    }

    function updateDailyWageFields() {
        if (!dailyWageType) return;
        var val = dailyWageType.value;
        if (dailyWageSpecificFields) dailyWageSpecificFields.style.display = val === 'specific' ? '' : 'none';
        syncOptionCards(dailyWageOptionsEl, val);
    }

    var overtimeFieldsWrap = document.getElementById('overtimeFields');

    function updateOvertimeFields() {
        if (!overtimeType) return;
        var val = overtimeType.value;
        if (overtimeFieldsWrap) overtimeFieldsWrap.style.display = val === 'none' ? 'none' : '';
        if (overtimeMultiplierRow) overtimeMultiplierRow.style.display = val === 'none' ? 'none' : '';
        if (overtimeTotalHoursField) overtimeTotalHoursField.style.display = val === 'multiplier' ? '' : 'none';
        syncOptionCards(overtimeOptionsEl, val);
    }

    function updatePenaltyFields(toggle, fields) {
        if (toggle && fields) {
            fields.style.display = toggle.checked ? '' : 'none';
        }
    }

    bindOptionCards(workingHourType && workingHourType.parentElement, workingHourType, updateWorkingHourFields);
    bindOptionCards(offDayOptionsEl, offDayType, updateOffDayFields);
    bindOptionCards(dailyWageOptionsEl, dailyWageType, updateDailyWageFields);
    bindOptionCards(overtimeOptionsEl, overtimeType, updateOvertimeFields);

    // Prevent info button clicks from triggering card selection
    var infoBtns = document.querySelectorAll('.wh-info-btn');
    for (var ib = 0; ib < infoBtns.length; ib++) {
        infoBtns[ib].addEventListener('click', function (e) { e.stopPropagation(); });
    }

    if (fullDayPenaltyToggle) fullDayPenaltyToggle.addEventListener('change', function () { updatePenaltyFields(this, fullDayPenaltyFields); payrollDirty = true; });
    if (halfDayPenaltyToggle) halfDayPenaltyToggle.addEventListener('change', function () { updatePenaltyFields(this, halfDayPenaltyFields); payrollDirty = true; });
    if (lateComingPenaltyToggle) lateComingPenaltyToggle.addEventListener('change', function () { updatePenaltyFields(this, lateComingPenaltyFields); payrollDirty = true; });

    // Custom dropdown (cdrop)
    document.querySelectorAll('.cdrop').forEach(function (drop) {
        var trigger = drop.querySelector('.cdrop-trigger');
        var menu = drop.querySelector('.cdrop-menu');
        var valueEl = drop.querySelector('.cdrop-value');
        var hiddenId = drop.id ? drop.id.replace('Drop', '') : null;
        var hidden = hiddenId ? document.getElementById(hiddenId) : null;

        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            var wasOpen = drop.classList.contains('open');
            document.querySelectorAll('.cdrop.open').forEach(function (d) { d.classList.remove('open'); });
            if (!wasOpen) drop.classList.add('open');
        });

        menu.addEventListener('click', function (e) {
            var opt = e.target.closest('.cdrop-opt');
            if (!opt) return;
            menu.querySelectorAll('.cdrop-opt').forEach(function (o) { o.classList.remove('cdrop-opt-active'); });
            opt.classList.add('cdrop-opt-active');
            valueEl.textContent = opt.textContent;
            if (hidden) hidden.value = opt.getAttribute('data-value');
            drop.classList.remove('open');
            payrollDirty = true;
        });
    });

    document.addEventListener('click', function () {
        document.querySelectorAll('.cdrop.open').forEach(function (d) { d.classList.remove('open'); });
    });

    // Mark dirty on any input/select change inside payroll
    var payrollSection = document.getElementById('sectionPayroll');
    if (payrollSection) {
        payrollSection.addEventListener('input', function () { payrollDirty = true; });
        payrollSection.addEventListener('change', function () { payrollDirty = true; });
    }

    // Capture initial state for payroll
    /**
    * Capture current values of input and select elements inside the payrollSection and return them keyed by element id.
    * @example
    * capturePayrollState()
    * { "salaryInput": "50000", "fullTimeCheckbox": true, "departmentSelect": "HR" }
    * @returns {Object.<string, string|boolean>} Object mapping element IDs to their current value (string) or checked state (boolean).
    */
    function capturePayrollState() {
        var state = {};
        if (payrollSection) {
            var inputs = payrollSection.querySelectorAll('input, select');
            for (var i = 0; i < inputs.length; i++) {
                var el = inputs[i];
                if (el.type === 'checkbox') {
                    state[el.id] = el.checked;
                } else {
                    state[el.id] = el.value;
                }
            }
        }
        return state;
    }

    var payrollInitialState = capturePayrollState();

    /**
    * Restore form input values in the payroll section from a saved state object.
    * @example
    * restorePayrollState({ "fullDayPenaltyToggle": true, "workingHours": "8" })
    * undefined
    * @param {{Object}} {{state}} - Object mapping input element IDs to saved values (booleans for checkboxes, strings for other inputs).
    * @returns {{void}} No value is returned; the function updates DOM elements directly.
    **/
    function restorePayrollState(state) {
        if (!payrollSection) return;
        var inputs = payrollSection.querySelectorAll('input, select');
        for (var i = 0; i < inputs.length; i++) {
            var el = inputs[i];
            if (state.hasOwnProperty(el.id)) {
                if (el.type === 'checkbox') {
                    el.checked = state[el.id];
                } else {
                    el.value = state[el.id];
                }
            }
        }
        updateWorkingHourFields();
        updateOffDayFields();
        updateDailyWageFields();
        updateOvertimeFields();
        updatePenaltyFields(fullDayPenaltyToggle, fullDayPenaltyFields);
        updatePenaltyFields(halfDayPenaltyToggle, halfDayPenaltyFields);
        updatePenaltyFields(lateComingPenaltyToggle, lateComingPenaltyFields);
    }

    function doPayrollSave() {
        payrollDirty = false;
        payrollInitialState = capturePayrollState();
    }

    function resetPayrollState() {
        restorePayrollState(payrollInitialState);
        payrollDirty = false;
    }

    // -- Unified Management Save/Cancel --
    var mgmtSaveBtn = document.getElementById('mgmtSaveBtn');
    var mgmtCancelBtn = document.getElementById('mgmtCancelBtn');
    var saveConfirmModal = document.getElementById('saveConfirmModal');
    var saveConfirmList = document.getElementById('saveConfirmList');
    var saveConfirmOk = document.getElementById('saveConfirmOk');
    var saveConfirmCancel = document.getElementById('saveConfirmCancel');
    var saveConfirmClose = document.getElementById('saveConfirmClose');

    // Build human-readable change summary
    /**
    * Builds a summary of modified settings and returns them as an array of change items grouped by section.
    * @example
    * buildChangeSummary()
    * [{ section: 'Shifts & Time', text: 'Advance Shift <strong>enabled</strong>' }, { section: 'Payroll', text: 'Overtime changed to <strong>2</strong>' }]
    * @returns {{Array<Object>}} Array of change items where each item has a 'section' and an HTML-formatted 'text' describing the change.
    **/
    function buildChangeSummary() {
        var items = [];

        // Shifts changes
        if (shiftsDirty) {
            var current = advanceShiftToggle ? advanceShiftToggle.checked : false;
            items.push({
                section: 'Shifts & Time',
                text: 'Advance Shift <strong>' + (current ? 'enabled' : 'disabled') + '</strong>'
            });
        }

        // Attendance changes
        if (attendanceDirty) {
            var regOn = regToggle ? regToggle.checked : false;
            if (regOn !== attendanceInitialToggle) {
                items.push({
                    section: 'Attendance',
                    text: 'Regularization <strong>' + (regOn ? 'enabled' : 'disabled') + '</strong>'
                });
            }
            if (regOn && regLimitInput) {
                var newLimit = regLimitInput.value;
                var oldLimit = attendanceInitialLimit;
                if (newLimit !== oldLimit) {
                    items.push({
                        section: 'Attendance',
                        text: 'Regularization limit changed to <strong>' + newLimit + '</strong>/month'
                    });
                }
            }
        }

        // Hardware changes
        if (hardwareDirty) {
            var newTime = syncTimeInput ? syncTimeInput.value : '';
            items.push({
                section: 'Hardware',
                text: 'Device sync time changed to <strong>' + newTime + '</strong>'
            });
        }

        // Payroll changes
        if (payrollDirty) {
            var currentState = capturePayrollState();
            for (var key in currentState) {
                if (!currentState.hasOwnProperty(key) || !payrollInitialState.hasOwnProperty(key)) continue;
                if (currentState[key] === payrollInitialState[key]) continue;

                var el = document.getElementById(key);
                if (!el) continue;

                // Find a readable label
                var label = '';
                var card = el.closest('.mgmt-setting-card, .payroll-row, .pen-row, .ot-field');
                if (card) {
                    var lbl = card.querySelector('.mgmt-setting-title, .payroll-row-title, .pen-title, .ot-field-label');
                    if (lbl) label = lbl.textContent.trim();
                }
                if (!label) {
                    // Try parent label
                    var parentLabel = el.closest('[class*="field"]');
                    if (parentLabel) {
                        var pLbl = parentLabel.querySelector('label');
                        if (pLbl) label = pLbl.textContent.trim();
                    }
                }
                if (!label) label = key;

                var oldVal = payrollInitialState[key];
                var newVal = currentState[key];

                if (el.type === 'checkbox') {
                    items.push({
                        section: 'Payroll',
                        text: label + ' <strong>' + (newVal === true || newVal === 'true' ? 'enabled' : 'disabled') + '</strong>'
                    });
                } else {
                    items.push({
                        section: 'Payroll',
                        text: label + ' changed to <strong>' + newVal + '</strong>'
                    });
                }
            }
        }

        return items;
    }

    /**
    * Render a grouped summary of changes into the global saveConfirmList element.
    * @example
    * renderChangeSummary([{section: 'General', text: 'Changed title'}])
    * undefined
    * @param {{Array.<{section: string, text: string}>}} {{items}} - Array of change items; each item should have 'section' and 'text' string properties.
    * @returns {{void}} Updates the DOM (saveConfirmList.innerHTML) and returns nothing.
    **/
    function renderChangeSummary(items) {
        if (!saveConfirmList) return;
        if (items.length === 0) {
            saveConfirmList.innerHTML = '<div class="save-confirm-empty">No changes detected</div>';
            return;
        }

        var html = '';
        var lastSection = '';
        for (var i = 0; i < items.length; i++) {
            if (items[i].section !== lastSection) {
                html += '<div class="save-confirm-section">' + items[i].section + '</div>';
                lastSection = items[i].section;
            }
            html += '<div class="save-confirm-item">' +
                '<div class="save-confirm-dot"></div>' +
                '<div class="save-confirm-text">' + items[i].text + '</div>' +
                '</div>';
        }
        saveConfirmList.innerHTML = html;
    }

    function showSaveConfirm() {
        if (saveConfirmModal) saveConfirmModal.classList.add('visible');
    }

    function hideSaveConfirm() {
        if (saveConfirmModal) saveConfirmModal.classList.remove('visible');
    }

    /**
    * Validate management attendance inputs, build a change summary, and show the save confirmation modal.
    * @example
    * doManagementSave()
    * undefined
    * @returns {void} Performs validation and UI updates (may mark inputs as error, focus and scroll to fields, render summary, and display confirmation); does not return a value.
    **/
    function doManagementSave() {
        // Validate attendance first
        if (attendanceDirty) {
            if (regToggle && regToggle.checked && regLimitInput && !regLimitInput.value.trim()) {
                regLimitInput.classList.add('input-error');
                var regLimitErr = document.getElementById('regularizationLimitError');
                if (regLimitErr) regLimitErr.classList.add('visible');
                regLimitInput.focus();
                var attEl = mgmtItemMap.attendance;
                if (attEl && mgmtScrollContainer) {
                    mgmtScrollContainer.scrollTo({
                        top: attEl.offsetTop - mgmtScrollContainer.offsetTop,
                        behavior: 'smooth'
                    });
                }
                return;
            }
        }

        // Build summary and show confirmation modal
        var changes = buildChangeSummary();
        renderChangeSummary(changes);
        showSaveConfirm();
    }

    /**
    * Save any pending changes for shifts, attendance, hardware, and payroll; hide the save confirmation and display temporary "Saved!" feedback on the management save button.
    * @example
    * confirmAndSave()
    * undefined
    * @returns {void} No return value.
    **/
    function confirmAndSave() {
        hideSaveConfirm();
        if (shiftsDirty) doShiftsSave();
        if (attendanceDirty) doAttendanceSave();
        if (hardwareDirty) doHardwareSave();
        if (payrollDirty) doPayrollSave();

        // Show "Saved!" feedback on unified button
        if (mgmtSaveBtn) {
            mgmtSaveBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Saved!';
            mgmtSaveBtn.style.background = '#27ae60';
            var btn = mgmtSaveBtn;
            setTimeout(function () {
                btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save Changes';
                btn.style.background = '';
            }, 1500);
        }
    }

    if (mgmtSaveBtn) {
        mgmtSaveBtn.addEventListener('click', doManagementSave);
    }

    if (saveConfirmOk) {
        saveConfirmOk.addEventListener('click', confirmAndSave);
    }

    if (saveConfirmCancel) {
        saveConfirmCancel.addEventListener('click', hideSaveConfirm);
    }

    if (saveConfirmClose) {
        saveConfirmClose.addEventListener('click', hideSaveConfirm);
    }

    if (saveConfirmModal) {
        saveConfirmModal.addEventListener('click', function (e) {
            if (e.target === saveConfirmModal) hideSaveConfirm();
        });
    }

    if (mgmtCancelBtn) {
        mgmtCancelBtn.addEventListener('click', function () {
            resetAllManagement();
        });
    }

    // -- Generic unsaved modal --
    /**
    * Show a modal prompting the user to discard unsaved changes and store a pending navigation action.
    * @example
    * showUnsavedModal(function() { /* proceed */
    function showUnsavedModal(onComplete, source) {
        pendingNavAction = onComplete;
        pendingDirtySource = source || null;
        if (unsavedModalText) {
            if (source === 'management') {
                var changes = buildChangeSummary();
                var summary = '';
                for (var ci = 0; ci < changes.length; ci++) {
                    // Strip HTML tags for plain text
                    var plain = changes[ci].text.replace(/<[^>]+>/g, '');
                    summary += '\n- ' + changes[ci].section + ': ' + plain;
                }
                unsavedModalText.textContent = 'You have unsaved changes:' + summary + '\n\nDiscard these changes and continue?';
                unsavedModalText.style.whiteSpace = 'pre-line';
                unsavedModalText.style.textAlign = 'left';
            } else {
                unsavedModalText.textContent = 'You have unsaved changes. Do you want to discard these changes and continue, or cancel to stay on the current tab?';
                unsavedModalText.style.whiteSpace = '';
                unsavedModalText.style.textAlign = '';
            }
        }
        if (unsavedModal) unsavedModal.classList.add('visible');
    }

    function hideUnsavedModal() {
        if (unsavedModal) unsavedModal.classList.remove('visible');
        pendingNavAction = null;
        pendingDirtySource = null;
    }

    /**
    * Set slipDirty to false and update the save button UI to show a saved state, then revert the button after a short delay.
    * @example
    * doSave()
    * undefined
    * @returns {{void}} No return value; updates global state and the DOM (saveBtn) as a side effect.
    */
    function doSave() {
        slipDirty = false;
        if (saveBtn) {
            saveBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Saved!';
            saveBtn.style.background = '#27ae60';
            var btn = saveBtn;
            setTimeout(function () {
                btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save Changes';
                btn.style.background = '';
            }, 1500);
        }
    }

    if (unsavedCancelBtn) {
        unsavedCancelBtn.addEventListener('click', hideUnsavedModal);
    }

    if (unsavedCloseBtn) {
        unsavedCloseBtn.addEventListener('click', hideUnsavedModal);
    }

    function resetAllManagement() {
        resetShiftsState();
        resetAttendanceState();
        resetHardwareState();
        resetPayrollState();
    }

    if (unsavedDiscardBtn) {
        unsavedDiscardBtn.addEventListener('click', function () {
            if (pendingDirtySource === 'management') {
                resetAllManagement();
            } else if (pendingDirtySource === 'salarySlip') {
                slipDirty = false;
            } else {
                slipDirty = false;
            }
            hideUnsavedModal();
            if (pendingNavAction) {
                var action = pendingNavAction;
                pendingNavAction = null;
                action();
            }
        });
    }

    // Close modal on overlay click
    if (unsavedModal) {
        unsavedModal.addEventListener('click', function (e) {
            if (e.target === unsavedModal) hideUnsavedModal();
        });
    }

    // --- Save Button ---
    if (saveBtn) {
        saveBtn.addEventListener('click', function () {
            doSave();
        });
    }

    // --- Download Salary Slip as PDF ---
    var downloadPdfBtn = document.getElementById('downloadSlipPdf');
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', function () {
            var compName = companyNameInput ? companyNameInput.value : 'Company';
            var compAddr = companyAddressInput ? companyAddressInput.value : '';
            var compContact = companyContactInput ? companyContactInput.value : '';
            var compEmail = companyEmailInput ? companyEmailInput.value : '';
            var now = new Date();
            var mi = now.getMonth();
            var yr = now.getFullYear().toString();
            var monthShort = MONTH_SHORT[mi] + ' ' + yr;
            var monthFull = MONTH_NAMES[mi].toUpperCase() + ' ' + yr;

            var pdfHtml = '<!DOCTYPE html><html><head><title>Salary Slip - ' + esc(compName) + '</title>' +
                '<style>' +
                '*{margin:0;padding:0;box-sizing:border-box;}' +
                'body{font-family:"Segoe UI","Open Sans",Arial,sans-serif;color:#333;padding:32px;background:#fff;}' +
                '.slip{max-width:700px;margin:0 auto;border:1px solid #d0d7de;border-radius:4px;overflow:hidden;}' +
                '.top-bar{height:4px;background:linear-gradient(90deg,#2e86c1,#1a5276);}' +
                '.slip-hdr{display:flex;align-items:center;gap:14px;padding:18px 24px;background:#fff;border-bottom:2px solid #2e86c1;}' +
                '.slip-hdr-info h2{font-size:18px;color:#1a2b3c;margin:0;}' +
                '.slip-hdr-info p{font-size:12px;color:#6c757d;margin:2px 0 0;}' +
                '.slip-hdr-info .contact{font-size:11px;color:#8898aa;}' +
                '.month-badge{margin-left:auto;padding:5px 14px;background:#e8f4fd;border:1px solid #c8ddf0;border-radius:4px;font-size:12px;font-weight:700;color:#2e86c1;text-transform:uppercase;letter-spacing:0.3px;}' +
                '.title-bar{padding:8px 24px;background:#f0f5fa;border-bottom:1px solid #e2eaf3;font-size:10px;font-weight:700;color:#5a7a96;text-align:center;text-transform:uppercase;letter-spacing:1.2px;}' +
                '.section{padding:14px 24px;border-bottom:1px solid #e2eaf3;}' +
                '.section-title{font-size:11px;font-weight:700;color:#2e86c1;text-transform:uppercase;letter-spacing:0.8px;margin:0 0 10px;padding-bottom:5px;border-bottom:1px dashed #d0dbe6;}' +
                '.details-grid{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid #e8ecf0;border-radius:4px;overflow:hidden;}' +
                '.detail-item{display:flex;gap:6px;font-size:11px;padding:5px 10px;border-bottom:1px solid #f0f2f5;border-right:1px solid #f0f2f5;background:#fff;}' +
                '.detail-item:nth-child(3n){border-right:none;}' +
                '.detail-item:nth-last-child(-n+3){border-bottom:none;}' +
                '.detail-label{color:#8898aa;font-weight:600;min-width:85px;white-space:nowrap;}' +
                '.detail-value{color:#1a2b3c;font-weight:600;}' +
                '.ed-grid{display:grid;grid-template-columns:1fr 1px 1fr;border:1px solid #e8ecf0;border-radius:4px;overflow:hidden;}' +
                '.ed-divider{background:#e2eaf3;}' +
                '.ed-col{padding:10px 12px;}' +
                '.ed-col .section-title{border-bottom:none;margin-bottom:6px;padding-bottom:0;}' +
                '.ed-row{display:flex;justify-content:space-between;padding:4px 0;font-size:12px;color:#444;border-bottom:1px solid #f5f5f5;}' +
                '.ed-total{font-weight:700;color:#1a2b3c;border-top:2px solid #2e86c1;border-bottom:none;padding-top:6px;margin-top:4px;font-size:13px;}' +
                '.footer{display:flex;gap:24px;align-items:center;padding:14px 24px;background:linear-gradient(135deg,#f0f5fa,#e8f0f8);border-top:1px solid #e2eaf3;}' +
                '.footer-item{display:flex;gap:6px;align-items:center;font-size:12px;}' +
                '.footer-label{color:#8898aa;font-weight:600;}' +
                '.footer-value{color:#1a2b3c;font-weight:700;}' +
                '.net-pay{margin-left:auto;padding:6px 16px;background:#2e86c1;border-radius:4px;}' +
                '.net-pay .footer-label{color:rgba(255,255,255,0.8);}' +
                '.net-pay .footer-value{color:#fff;font-size:15px;}' +
                '.pay-words{padding:8px 24px;background:#f8fafb;border-top:1px dashed #d0dbe6;font-size:10px;display:flex;gap:5px;}' +
                '.pay-words-lbl{font-weight:700;color:#5a7a96;white-space:nowrap;}' +
                '.pay-words-val{color:#1a2b3c;font-weight:600;font-style:italic;}' +
                '.signatory{display:flex;justify-content:space-between;padding:24px 24px 14px;gap:60px;}' +
                '.sig-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:5px;}' +
                '.sig-line{width:100%;height:1px;background:#c8d3de;}' +
                '.sig-label{font-size:9px;font-weight:600;color:#8898aa;text-transform:uppercase;letter-spacing:0.5px;}' +
                '.gen-note{padding:6px 24px;font-size:9px;color:#adb5bd;text-align:center;font-style:italic;border-top:1px solid #f0f2f5;background:#fafbfc;}' +
                '@media print{body{padding:16px;}.slip{border:none;box-shadow:none;}}' +
                '</style></head><body>' +
                '<div class="slip">' +
                '<div class="top-bar"></div>' +
                '<div class="slip-hdr">' +
                '<div class="slip-hdr-info">' +
                '<h2>' + esc(compName) + '</h2>' +
                '<p>' + esc(compAddr) + '</p>' +
                (compContact || compEmail ? '<p class="contact">' + esc([compContact, compEmail].filter(Boolean).join(' | ')) + '</p>' : '') +
                '</div>' +
                '<div class="month-badge">' + esc(monthShort) + '</div>' +
                '</div>' +
                '<div class="title-bar">Payslip for the Month of ' + esc(monthFull) + '</div>' +
                '<div class="section">' +
                '<div class="section-title">Employee Details</div>' +
                '<div class="details-grid">' +
                '<div class="detail-item"><span class="detail-label">Name</span><span class="detail-value">Jinay Shah</span></div>' +
                '<div class="detail-item"><span class="detail-label">Code</span><span class="detail-value">EMP001</span></div>' +
                '<div class="detail-item"><span class="detail-label">Designation</span><span class="detail-value">Software Engineer</span></div>' +
                '<div class="detail-item"><span class="detail-label">Department</span><span class="detail-value">Engineering</span></div>' +
                '<div class="detail-item"><span class="detail-label">UAN Number</span><span class="detail-value">1234 5678 9012</span></div>' +
                '<div class="detail-item"><span class="detail-label">Work Location</span><span class="detail-value">Ahmedabad</span></div>' +
                '<div class="detail-item"><span class="detail-label">Bank Name</span><span class="detail-value">HDFC Bank</span></div>' +
                '<div class="detail-item"><span class="detail-label">Bank A/C No.</span><span class="detail-value">XXXX XXXX 4567</span></div>' +
                '<div class="detail-item"><span class="detail-label">IFSC Code</span><span class="detail-value">HDFC0001234</span></div>' +
                '<div class="detail-item"><span class="detail-label">Branch</span><span class="detail-value">SG Highway</span></div>' +
                '<div class="detail-item"><span class="detail-label">PF Number</span><span class="detail-value">GJ/AHD/12345</span></div>' +
                '<div class="detail-item"><span class="detail-label">ESIC Number</span><span class="detail-value">31-00-123456</span></div>' +
                '</div></div>' +
                '<div class="section"><div class="ed-grid">' +
                '<div class="ed-col"><div class="section-title">Earnings</div>' +
                '<div class="ed-row"><span>Basic Salary</span><span>25,000</span></div>' +
                '<div class="ed-row"><span>HRA</span><span>10,000</span></div>' +
                '<div class="ed-row"><span>Special Allowance</span><span>5,000</span></div>' +
                '<div class="ed-row"><span>Conveyance</span><span>1,600</span></div>' +
                '<div class="ed-row ed-total"><span>Total Earnings</span><span>41,600</span></div></div>' +
                '<div class="ed-divider"></div>' +
                '<div class="ed-col"><div class="section-title">Deductions</div>' +
                '<div class="ed-row"><span>PF (Employee)</span><span>1,800</span></div>' +
                '<div class="ed-row"><span>Professional Tax</span><span>200</span></div>' +
                '<div class="ed-row"><span>TDS</span><span>2,500</span></div>' +
                '<div class="ed-row"><span>ESIC</span><span>312</span></div>' +
                '<div class="ed-row ed-total"><span>Total Deductions</span><span>4,812</span></div></div>' +
                '</div></div>' +
                '<div class="footer">' +
                '<div class="footer-item"><span class="footer-label">Worked Days</span><span class="footer-value">22</span></div>' +
                '<div class="footer-item"><span class="footer-label">Weekly Off</span><span class="footer-value">8</span></div>' +
                '<div class="footer-item net-pay"><span class="footer-label">Net Pay</span><span class="footer-value">36,788</span></div>' +
                '</div>' +
                '<div class="pay-words"><span class="pay-words-lbl">In Words:</span><span class="pay-words-val">Thirty Six Thousand Seven Hundred Eighty Eight Rupees Only</span></div>' +
                '<div class="signatory"><div class="sig-item"><div class="sig-line"></div><span class="sig-label">Employee Signature</span></div><div class="sig-item"><div class="sig-line"></div><span class="sig-label">Authorized Signatory</span></div></div>' +
                '<div class="gen-note">Computer generated payslip - No signature required</div>' +
                '</div></body></html>';

            var printWin = window.open('', '_blank', 'width=800,height=600');
            printWin.document.write(pdfHtml);
            printWin.document.close();
            printWin.focus();
            setTimeout(function () { printWin.print(); }, 300);
        });
    }

    // ==================== USER MANAGEMENT ====================

    // --- UM Seed Data ---
    var umUsers = [
        { id: 1, name: 'Nishil Shah', phone: '9876543210', email: 'nishil.shah@petpooja.com', phoneVerified: true, emailVerified: true, superAdmin: true, template: 'Admin Template' },
        { id: 2, name: 'Developer Accounts 1', phone: '9876543211', email: 'developer1@petpooja.com', phoneVerified: true, emailVerified: true, superAdmin: true, template: 'Admin Template' },
        { id: 3, name: 'Ayaz Maniar', phone: '9876543212', email: 'ayaz.maniar@petpooja.com', phoneVerified: true, emailVerified: false, superAdmin: false, template: 'Manager Template' },
        { id: 4, name: 'Jinay Shah', phone: '9876543213', email: 'jinay.shah@petpooja.com', phoneVerified: true, emailVerified: true, superAdmin: false, template: 'Manager Template' },
        { id: 5, name: 'Rahul Patel', phone: '9876543214', email: 'rahul.patel@petpooja.com', phoneVerified: false, emailVerified: false, superAdmin: false, template: '' },
        { id: 6, name: 'Priya Sharma', phone: '9876543215', email: 'priya.sharma@petpooja.com', phoneVerified: true, emailVerified: true, superAdmin: false, template: 'Viewer Template' },
        { id: 7, name: 'Amit Verma', phone: '9876543216', email: '', phoneVerified: true, emailVerified: false, superAdmin: false, template: '' },
        { id: 8, name: 'Sneha Kapoor', phone: '9876543217', email: 'sneha.kapoor@petpooja.com', phoneVerified: true, emailVerified: true, superAdmin: false, template: 'Viewer Template' }
    ];

    // --- Generate 200 dummy users ---
    var umFirstNames = ['Aarav', 'Aditi', 'Aditya', 'Akash', 'Aman', 'Ananya', 'Ankit', 'Anjali', 'Arjun', 'Bhavna', 'Chirag', 'Deepak', 'Disha', 'Gaurav', 'Harsh', 'Isha', 'Karan', 'Kavita', 'Kunal', 'Lakshmi', 'Mahesh', 'Manisha', 'Mohit', 'Nandini', 'Neha', 'Nikhil', 'Pallavi', 'Pankaj', 'Pooja', 'Rajesh', 'Ravi', 'Ritika', 'Rohit', 'Sakshi', 'Sanjay', 'Shivani', 'Shreya', 'Sunil', 'Swati', 'Tanvi', 'Tushar', 'Varun', 'Vidya', 'Vikram', 'Yash', 'Zara', 'Divya', 'Gaurang', 'Hemant', 'Jyoti'];
    var umLastNames = ['Agarwal', 'Bansal', 'Chauhan', 'Desai', 'Gandhi', 'Gupta', 'Iyer', 'Jain', 'Joshi', 'Kapoor', 'Kumar', 'Malhotra', 'Mehta', 'Mishra', 'Nair', 'Pandey', 'Patel', 'Rao', 'Reddy', 'Shah', 'Sharma', 'Singh', 'Sinha', 'Tiwari', 'Verma', 'Yadav', 'Bhatt', 'Chopra', 'Dutta', 'Kulkarni'];
    var umTemplatOptions = ['Admin Template', 'Manager Template', 'Viewer Template', ''];
    var umDomains = ['petpooja.com', 'gmail.com', 'outlook.com', 'yahoo.com', 'company.in'];

    for (var ui = 0; ui < 200; ui++) {
        var fn = randomFrom(umFirstNames);
        var ln = randomFrom(umLastNames);
        var fullName = fn + ' ' + ln;
        var phoneNum = '9' + String(Math.floor(100000000 + Math.random() * 900000000));
        var hasEmail = Math.random() > 0.15;
        var emailAddr = hasEmail ? (fn.toLowerCase() + '.' + ln.toLowerCase() + '@' + randomFrom(umDomains)) : '';
        var pVerified = Math.random() > 0.25;
        var eVerified = hasEmail ? Math.random() > 0.3 : false;
        var isSuperAdmin = Math.random() < 0.05;
        var tpl = isSuperAdmin ? 'Admin Template' : randomFrom(umTemplatOptions);

        umUsers.push({
            id: 9 + ui,
            name: fullName,
            phone: phoneNum,
            email: emailAddr,
            phoneVerified: pVerified,
            emailVerified: eVerified,
            superAdmin: isSuperAdmin,
            template: tpl
        });
    }

    var umAllUsers = umUsers.slice(); // keep full copy for filtering

    // Generate 200 dummy templates
    var umTemplates = [];
    var templateTypes = ['Admin', 'Manager', 'Viewer', 'Editor', 'Analyst', 'Accountant', 'HR', 'Sales', 'Marketing', 'Support', 'Developer', 'Designer', 'Coordinator', 'Supervisor', 'Executive', 'Specialist', 'Consultant', 'Trainee', 'Intern', 'Lead'];
    var templatePrefixes = ['Full', 'Limited', 'Senior', 'Junior', 'Regional', 'Branch', 'Department', 'Team', 'Project', 'Temporary', 'Permanent', 'Contract', 'Associate', 'Chief', 'Assistant', 'Head', 'Senior', 'Junior', 'Mid-Level', 'Entry-Level'];
    var templateCreators = ['Nishil Shah', 'Ayaz Maniar', 'Hemanshu', 'Arjun', 'Developer Accounts 1', 'Developer Accounts 2', 'Admin User', 'System Admin', 'HR Manager', 'IT Manager'];

    // Generate templates
    for (var ti = 0; ti < 200; ti++) {
        var tId = ti + 1;
        var tName = '';

        // Create varied template names
        if (ti < 20) {
            // First 20: Simple types
            tName = templateTypes[ti % templateTypes.length] + ' Template';
        } else if (ti < 60) {
            // Next 40: Prefix + Type
            var prefixIdx = Math.floor(Math.random() * templatePrefixes.length);
            var typeIdx = Math.floor(Math.random() * templateTypes.length);
            tName = templatePrefixes[prefixIdx] + ' ' + templateTypes[typeIdx];
        } else if (ti < 120) {
            // Next 60: Department/Role specific
            var departments = ['Finance', 'HR', 'Sales', 'Marketing', 'Engineering', 'Operations', 'Support', 'Admin', 'IT', 'Legal'];
            var roles = ['Read Only', 'Full Access', 'Limited Access', 'View Only', 'Edit Rights', 'Approval Rights', 'Basic', 'Advanced', 'Premium', 'Standard'];
            tName = departments[ti % departments.length] + ' - ' + roles[Math.floor(Math.random() * roles.length)];
        } else {
            // Remaining: Combined variations
            var combo1 = ['North', 'South', 'East', 'West', 'Central', 'Regional', 'Global', 'Local', 'Remote', 'On-site'];
            var combo2 = ['Office', 'Branch', 'Division', 'Unit', 'Team', 'Department', 'Sector', 'Zone'];
            var combo3 = templateTypes[Math.floor(Math.random() * templateTypes.length)];
            tName = combo1[ti % combo1.length] + ' ' + combo2[Math.floor(Math.random() * combo2.length)] + ' ' + combo3;
        }

        // Generate realistic data
        var rightsCount = Math.floor(Math.random() * 12) + 1; // 1-12 rights
        var assignedPeople = ti < 10 ? Math.floor(Math.random() * 50) + 10 : Math.floor(Math.random() * 20); // Popular templates have more people
        var createdBy = templateCreators[Math.floor(Math.random() * templateCreators.length)];

        // Generate dates (created between 6 months ago and 2 years ago)
        var daysAgo = Math.floor(Math.random() * 730) + 1; // 1-730 days ago
        var createdDate = new Date();
        createdDate.setDate(createdDate.getDate() - daysAgo);

        // Last modified (between created date and now)
        var modifiedDaysAgo = Math.floor(Math.random() * daysAgo);
        var modifiedDate = new Date();
        modifiedDate.setDate(modifiedDate.getDate() - modifiedDaysAgo);

        // Modified by might be different from created by
        var modifiedBy = Math.random() > 0.5 ? createdBy : templateCreators[Math.floor(Math.random() * templateCreators.length)];

        umTemplates.push({
            id: tId,
            name: tName,
            rightsCount: rightsCount,
            assignedPeople: assignedPeople,
            createdOn: createdDate,
            lastModified: modifiedDate,
            createdBy: createdBy,
            modifiedBy: modifiedBy
        });
    }

    // Keep full copy for filtering
    umAllTemplates = umTemplates.slice();

    var umNextId = 209;
    var umCurrentPage = 1;
    var umPageSize = 10;
    var umActiveDropdown = null;
    var umLastCreatedUser = null;

    // --- Template Pagination ---
    var umTemplateCurrentPage = 1;
    var umTemplatePageSize = 10;

    // --- Template Filter State ---
    var umTemplateFilters = {
        templateName: []
    };
    var umTemplateFilterInstances = {};

    // --- UM Filter State ---
    var UM_FILTER_KEYS = ['name', 'phone', 'email', 'superAdmin', 'template'];
    var umActiveFilters = {};

    // --- UM DOM Elements ---
    var umPageEl = document.getElementById('pageUserManagement');
    var umViewManageUsers = document.getElementById('umViewManageUsers');
    var umViewAssignRights = document.getElementById('umViewAssignRights');
    var umViewManageTemplates = document.getElementById('umViewManageTemplates');
    var umTableBody = document.getElementById('umTableBody');
    var umUserCount = document.getElementById('umUserCount');
    var umTabUserCount = document.getElementById('umTabUserCount');
    var umTabTemplateCount = document.getElementById('umTabTemplateCount');
    var umPaginationInfo = document.getElementById('umPaginationInfo');
    var umPageButtons = document.getElementById('umPageButtons');

    // --- UM Sidebar Navigation ---
    var sidebarUserMgmt = document.getElementById('sidebarUserMgmt');

    // Add userManagement to page map
    pageMap.userManagement = umPageEl;

    // Handle sidebar User Management click (direct navigation, no submenu)
    if (sidebarUserMgmt) {
        sidebarUserMgmt.querySelector('.sidebar-link').addEventListener('click', function (e) {
            e.preventDefault();

            // Navigate to User Management page
            var allItems = document.querySelectorAll('.sidebar-item');
            for (var j = 0; j < allItems.length; j++) {
                allItems[j].classList.remove('active');
            }
            sidebarUserMgmt.classList.add('active');

            for (var key in pageMap) {
                if (pageMap.hasOwnProperty(key)) {
                    pageMap[key].classList.toggle('active', key === 'userManagement');
                }
            }

            // Show Users tab by default
            umSwitchTab('users');

            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
                overlay.classList.remove('visible');
            }
        });
    }

    // --- UM Tab Switching ---
    /**
    * Switch the active UI tab and render corresponding content when opened.
    * @example
    * umSwitchTab('users')
    * undefined
    * @param {{string}} {{tabName}} - Name of the tab to activate; expected values: 'users' or 'templates'.
    * @returns {{void}} No return value.
    **/
    function umSwitchTab(tabName) {
        // Update tab buttons
        var allTabs = document.querySelectorAll('.um-tab');
        for (var i = 0; i < allTabs.length; i++) {
            var tab = allTabs[i];
            var isActive = tab.getAttribute('data-um-tab') === tabName;
            if (isActive) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        }

        // Update tab panels
        var allPanels = document.querySelectorAll('.um-tab-panel');
        for (var j = 0; j < allPanels.length; j++) {
            allPanels[j].classList.remove('active');
        }

        if (tabName === 'users') {
            document.getElementById('umPanelUsers').classList.add('active');
            umRenderTable(); // Render users when tab is opened
        } else if (tabName === 'templates') {
            document.getElementById('umPanelTemplates').classList.add('active');
            umRenderTemplateTable(); // Render templates when tab is opened
        }
    }

    // Handle tab clicks
    var umTabUsers = document.getElementById('umTabUsers');
    var umTabTemplates = document.getElementById('umTabTemplates');

    if (umTabUsers) {
        umTabUsers.addEventListener('click', function () {
            umSwitchTab('users');
        });
    }

    if (umTabTemplates) {
        umTabTemplates.addEventListener('click', function () {
            umSwitchTab('templates');
        });
    }

    // --- UM View Switcher ---
    /**
    * Toggle the user-management UI to the specified view and update related UI state.
    * @example
    * umShowView('manageUsers')
    * undefined
    * @param {{string}} {{view}} - Name of the view to activate: 'manageUsers', 'assignRights', or 'manageTemplates'.
    * @returns {{void}} Does not return a value.
    **/
    function umShowView(view) {
        var umViewManageUsers = document.getElementById('umViewManageUsers');
        var umViewAssignRights = document.getElementById('umViewAssignRights');

        if (!umViewManageUsers || !umViewAssignRights) return;

        umViewManageUsers.classList.remove('active');
        umViewAssignRights.classList.remove('active');

        if (view === 'manageUsers') {
            umViewManageUsers.classList.add('active');
            umSwitchTab('users');
            umRenderTable();
        } else if (view === 'assignRights') {
            umViewAssignRights.classList.add('active');
        } else if (view === 'manageTemplates') {
            // Switch to templates tab
            umSwitchTab('templates');
        }
    }

    // --- UM Get Filtered Data ---
    /**
    * Return a filtered copy of umAllUsers based on criteria in umActiveFilters.
    * @example
    * umGetFilteredData()
    * [{ id: 1, name: "Alice", role: "admin" }]
    * @param {void} none - This function takes no arguments; it reads global state (umAllUsers and umActiveFilters).
    * @returns {Array} Filtered array of user objects that match the active filters.
    **/
    function umGetFilteredData() {
        var data = umAllUsers.slice();
        for (var key in umActiveFilters) {
            if (!umActiveFilters.hasOwnProperty(key)) continue;
            if (!umActiveFilters[key] || umActiveFilters[key].length === 0) continue;
            var filterVals = umActiveFilters[key];
            var temp = [];
            for (var i = 0; i < data.length; i++) {
                var rowVal = umGetFilterValue(data[i], key);
                for (var f = 0; f < filterVals.length; f++) {
                    if (rowVal.toLowerCase() === filterVals[f].toLowerCase()) {
                        temp.push(data[i]);
                        break;
                    }
                }
            }
            data = temp;
        }
        return data;
    }

    function umGetFilterValue(user, key) {
        if (key === 'superAdmin') return user.superAdmin ? 'Yes' : 'No';
        if (key === 'template') return user.template || 'Not Assigned';
        return user[key] || '—';
    }

    // --- UM Render Users Table ---
    /**
    * Render the user management table and pagination controls based on filtered data, current page, and page size.
    * @example
    * umRenderTable()
    * undefined
    * @param {void} none - This function takes no arguments.
    * @returns {void} Updates the DOM (table body, user counts, and pagination buttons) and returns nothing.
    **/
    function umRenderTable() {
        umUsers = umGetFilteredData();
        var total = umUsers.length;
        var totalPages = Math.ceil(total / umPageSize);
        if (umCurrentPage > totalPages) umCurrentPage = totalPages;
        if (umCurrentPage < 1) umCurrentPage = 1;

        var start = (umCurrentPage - 1) * umPageSize;
        var end = Math.min(start + umPageSize, total);
        var pageData = umUsers.slice(start, end);

        umUserCount.textContent = total;
        if (umTabUserCount) {
            umTabUserCount.textContent = umAllUsers.length;
        }

        var html = '';
        for (var i = 0; i < pageData.length; i++) {
            var u = pageData[i];

            var phoneLabel = u.phoneVerified
                ? '<span class="um-status-label verified">Verified</span>'
                : '<span class="um-status-label not-verified">Not Verified</span>';

            var emailLabel = '';
            if (u.email) {
                emailLabel = u.emailVerified
                    ? '<span class="um-status-label verified">Verified</span>'
                    : '<span class="um-status-label not-verified">Not Verified</span>';
            }

            var superBadge = u.superAdmin
                ? '<span class="um-super-pill">Super Admin</span>'
                : '';

            var templateText = u.template
                ? '<span class="um-template-text">' + esc(u.template) + '</span>'
                : '<span class="um-template-text none">Not Assigned</span>';

            html += '<tr data-user-id="' + u.id + '">' +
                '<td><div class="um-name-cell"><span class="um-user-name">' + esc(u.name) + '</span>' + superBadge + '</div></td>' +
                '<td><div class="um-cell-stack">' + esc(u.phone) + phoneLabel + '</div></td>' +
                '<td class="um-col-email">' + (u.email ? '<div class="um-cell-stack">' + esc(u.email) + emailLabel + '</div>' : '<span style="color:#9ca3af">\u2014</span>') + '</td>' +
                '<td class="um-col-template">' + templateText + '</td>' +
                '<td class="um-col-action"><div class="um-action-cell">' +
                    '<div class="um-action-menu">' +
                        '<button class="um-action-dots" data-user-id="' + u.id + '">' +
                            '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="19" r="2"></circle></svg>' +
                        '</button>' +
                        '<div class="um-action-dropdown" id="umDropdown_' + u.id + '">' +
                            '<button class="um-action-dropdown-item" data-action="rights" data-user-id="' + u.id + '"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>Edit Rights</button>' +
                            '<button class="um-action-dropdown-item" data-action="edit" data-user-id="' + u.id + '"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>Edit User</button>' +
                            '<button class="um-action-dropdown-item danger" data-action="delete" data-user-id="' + u.id + '"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>Delete User</button>' +
                        '</div>' +
                    '</div>' +
                '</div></td>' +
                '</tr>';
        }
        umTableBody.innerHTML = html;

        // Pagination info
        if (total === 0) {
            umPaginationInfo.innerHTML = 'No users found';
        } else {
            umPaginationInfo.innerHTML = 'Showing <span class="pagination-highlight">' + (start + 1) + '</span> to <span class="pagination-highlight">' + end + '</span> of <span class="pagination-highlight">' + total + '</span> Results';
        }

        // Pagination buttons (reuse getPageRange from Activity Logs)
        var pHtml = '';
        if (totalPages > 0) {
            pHtml += '<button class="page-btn prev-btn"' + (umCurrentPage === 1 ? ' disabled' : '') + ' data-um-page="' + (umCurrentPage - 1) + '">Previous</button>';
            var pages = getPageRange(umCurrentPage, totalPages);
            for (var p = 0; p < pages.length; p++) {
                if (pages[p] === '...') {
                    pHtml += '<span class="page-ellipsis">...</span>';
                } else {
                    pHtml += '<button class="page-btn' + (pages[p] === umCurrentPage ? ' active' : '') + '" data-um-page="' + pages[p] + '">' + pages[p] + '</button>';
                }
            }
            pHtml += '<button class="page-btn next-btn"' + (umCurrentPage === totalPages ? ' disabled' : '') + ' data-um-page="' + (umCurrentPage + 1) + '">Next</button>';
        }
        umPageButtons.innerHTML = pHtml;
    }

    // UM Pagination clicks
    if (umPageButtons) {
        umPageButtons.addEventListener('click', function (e) {
            var btn = e.target.closest('.page-btn');
            if (!btn || btn.disabled) return;
            var p = parseInt(btn.getAttribute('data-um-page'), 10);
            if (p >= 1) {
                umCurrentPage = p;
                umRenderTable();
            }
        });
    }

    // UM Page Size selector
    var umPageSizeSelect = document.getElementById('umPageSizeSelect');
    if (umPageSizeSelect) {
        umPageSizeSelect.addEventListener('change', function () {
            umPageSize = parseInt(this.value, 10);
            umCurrentPage = 1;
            umRenderTable();
        });
    }

    // --- UM Filter System ---
    /**
    * Update filter option lists for each filter key by cross-filtering umAllUsers with other active filters.
    * @example
    * umUpdateFilterOptions()
    * // undefined (updates umFilterInstances in-place)
    * @returns {void} Updates filter instance options in-place; no value is returned.
    **/
    function umUpdateFilterOptions() {
        for (var k = 0; k < UM_FILTER_KEYS.length; k++) {
            var currentKey = UM_FILTER_KEYS[k];

            // Cross-filter: apply all OTHER active filters
            var data = umAllUsers.slice();
            for (var filterKey in umActiveFilters) {
                if (!umActiveFilters.hasOwnProperty(filterKey)) continue;
                if (!umActiveFilters[filterKey] || umActiveFilters[filterKey].length === 0) continue;
                if (filterKey === currentKey) continue;
                var fVals = umActiveFilters[filterKey];
                var temp = [];
                for (var i = 0; i < data.length; i++) {
                    var rv = umGetFilterValue(data[i], filterKey).toLowerCase();
                    for (var f = 0; f < fVals.length; f++) {
                        if (rv === fVals[f].toLowerCase()) { temp.push(data[i]); break; }
                    }
                }
                data = temp;
            }

            // Collect unique values + counts
            var counts = {};
            for (var j = 0; j < data.length; j++) {
                var val = umGetFilterValue(data[j], currentKey);
                if (val && val !== '—') {
                    counts[val] = (counts[val] || 0) + 1;
                }
            }

            var opts = [];
            var sortedKeys = Object.keys(counts).sort();
            for (var m = 0; m < sortedKeys.length; m++) {
                opts.push({ value: sortedKeys[m], count: counts[sortedKeys[m]] });
            }

            if (umFilterInstances[currentKey]) {
                umFilterInstances[currentKey].setOptions(opts);
            }
        }
    }

    /**
    * Handle filter changes by rebuilding active filters, updating filter UI (badges and options), resetting the current page, and re-rendering the table.
    * @example
    * umOnFilterChange()
    * undefined
    * @param {void} none - No parameters.
    * @returns {void} No return value.
    **/
    function umOnFilterChange() {
        umActiveFilters = {};
        for (var i = 0; i < UM_FILTER_KEYS.length; i++) {
            var key = UM_FILTER_KEYS[i];
            var vals = umFilterInstances[key] ? umFilterInstances[key].getValues() : [];
            if (vals.length > 0) umActiveFilters[key] = vals;
        }
        umUpdateFilterBadge();
        umUpdateFilterOptions();
        umCurrentPage = 1;
        umRenderTable();
    }

    /**
    * Update the UI filter badge and toggle visibility of clear actions based on the number of active filters.
    * @example
    * umUpdateFilterBadge()
    * undefined
    * @returns {void} No return value; updates DOM elements in place.
    */
    function umUpdateFilterBadge() {
        var count = 0;
        for (var key in umActiveFilters) {
            if (umActiveFilters.hasOwnProperty(key)) {
                count += umActiveFilters[key].length;
            }
        }
        var badge = document.getElementById('umFilterBadge');
        var clearActions = document.querySelector('#umFilterPanel .filter-actions');
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = '';
            if (clearActions) clearActions.classList.add('visible');
        } else {
            badge.style.display = 'none';
            if (clearActions) clearActions.classList.remove('visible');
        }
    }

    // Init UM searchable selects
    /**
    * Initialize UM filter widgets on the page: find elements with class "searchable-select um-filter", copy their data-um-key into data-key, instantiate SearchableSelect for each with umOnFilterChange, store instances on umFilterInstances by key, and refresh available filter options.
    * @example
    * initUmFilters()
    * undefined
    * @returns {void} No return value.
    **/
    (function initUmFilters() {
        var containers = document.querySelectorAll('.searchable-select.um-filter');
        for (var i = 0; i < containers.length; i++) {
            var el = containers[i];
            var key = el.getAttribute('data-um-key');
            // Temporarily set data-key for SearchableSelect constructor
            el.setAttribute('data-key', key);
            var ss = new SearchableSelect(el, umOnFilterChange);
            umFilterInstances[key] = ss;
        }
        umUpdateFilterOptions();
    })();

    // UM Filter toggle button
    var umFilterToggleBtn = document.getElementById('umFilterToggleBtn');
    var umFilterPanel = document.getElementById('umFilterPanel');
    if (umFilterToggleBtn && umFilterPanel) {
        umFilterToggleBtn.addEventListener('click', function () {
            umFilterPanel.classList.toggle('open');
        });
    }

    // UM Clear all filters
    var umClearFiltersBtn = document.getElementById('umClearFiltersBtn');
    if (umClearFiltersBtn) {
        umClearFiltersBtn.addEventListener('click', function () {
            umActiveFilters = {};
            for (var key in umFilterInstances) {
                if (umFilterInstances.hasOwnProperty(key)) {
                    umFilterInstances[key].clear();
                }
            }
            umUpdateFilterBadge();
            umUpdateFilterOptions();
            umCurrentPage = 1;
            umRenderTable();
        });
    }

    // --- UM Render Templates Table ---
    /**
    * Render the templates table into the DOM using current filters and pagination.
    * @example
    * umRenderTemplateTable()
    * undefined
    * @returns {void} Updates the table body, pagination controls and counts in the DOM; does not return a value.
    */
    function umRenderTemplateTable() {
        var tbody = document.getElementById('umTemplateTableBody');
        var countEl = document.getElementById('umTemplateCount');
        var paginationInfo = document.getElementById('umTemplatePaginationInfo');
        var pageButtons = document.getElementById('umTemplatePageButtons');

        if (!tbody) return;

        // Apply filters
        var filteredTemplates = umAllTemplates.filter(function(t) {
            var nameMatch = !umTemplateFilters.templateName || umTemplateFilters.templateName.length === 0 ||
                umTemplateFilters.templateName.indexOf(t.name) !== -1;

            return nameMatch;
        });

        // Pagination calculation
        var total = filteredTemplates.length;
        var totalPages = Math.ceil(total / umTemplatePageSize);
        if (umTemplateCurrentPage > totalPages) umTemplateCurrentPage = totalPages;
        if (umTemplateCurrentPage < 1) umTemplateCurrentPage = 1;

        var start = (umTemplateCurrentPage - 1) * umTemplatePageSize;
        var end = Math.min(start + umTemplatePageSize, total);
        var pageData = filteredTemplates.slice(start, end);

        // Update count
        if (countEl) {
            countEl.textContent = total;
        }
        if (umTabTemplateCount) {
            umTabTemplateCount.textContent = umAllTemplates.length;
        }

        var html = '';
        for (var i = 0; i < pageData.length; i++) {
            var t = pageData[i];

            // Format dates with enhanced display
            var createdDate = t.createdOn;
            var modifiedDate = t.lastModified;

            /**
            * Generate an HTML string that displays a formatted date/time and the user who performed the action.
            * @example
            * formatDateTimeUser('2021-07-20T18:30:00Z', 'Alice')
            * '<div class="um-datetime-cell">...</div>'
            * @param {{(Date|string|number)}} {{date}} - Date value or string/number parseable by Date to format.
            * @param {{string}} {{userName}} - User name to display (will be escaped via esc()).
            * @returns {{string}} HTML string containing the formatted date, time and user information.
            **/
            var formatDateCell = function(date, userName) {
                var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                var d = new Date(date);
                var day = d.getDate();
                var month = months[d.getMonth()];
                var year = d.getFullYear();
                var hours = d.getHours();
                var minutes = d.getMinutes();
                var ampm = hours >= 12 ? 'PM' : 'AM';
                var h12 = hours % 12;
                if (h12 === 0) h12 = 12;
                var formattedTime = h12 + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;
                var dateStr = day + ' ' + month + ' ' + year;

                return '<div class="um-datetime-cell">' +
                       '<div class="um-datetime-date">' + dateStr + ', <span class="um-datetime-time">' + formattedTime + '</span></div>' +
                       '<span class="um-datetime-user">' +
                           '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' +
                           '<span class="um-datetime-user-label">By</span> ' +
                           '<span class="um-datetime-user-name">' + esc(userName) + '</span>' +
                       '</span>' +
                   '</div>';
            };

            var createdStr = formatDateCell(createdDate, t.createdBy);
            var modifiedStr = formatDateCell(modifiedDate, t.modifiedBy || t.createdBy);

            html += '<tr>' +
                '<td><span class="um-user-name">' + esc(t.name) + '</span></td>' +
                '<td>' + t.assignedPeople + '</td>' +
                '<td>' + createdStr + '</td>' +
                '<td>' + modifiedStr.replace(' By ' + esc(t.createdBy), ' By ' + esc(t.createdBy)) + '</td>' +
                '<td class="um-col-action"><div class="um-action-cell">' +
                    '<button class="um-action-dots" data-template-id="' + t.id + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="19" r="2"></circle></svg></button>' +
                    '<div class="um-action-dropdown" id="umTemplateDropdown_' + t.id + '">' +
                        '<div class="um-action-dropdown-item" data-action="edit" data-template-id="' + t.id + '">' +
                            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>' +
                            'Edit' +
                        '</div>' +
                        '<div class="um-action-dropdown-item um-delete-item" data-action="delete" data-template-id="' + t.id + '">' +
                            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>' +
                            'Delete' +
                        '</div>' +
                    '</div>' +
                '</div></td>' +
                '</tr>';
        }
        tbody.innerHTML = html;

        // Pagination info
        if (paginationInfo) {
            if (total === 0) {
                paginationInfo.innerHTML = 'No templates found';
            } else {
                paginationInfo.innerHTML = 'Showing <span class="pagination-highlight">' + (start + 1) + '</span> to <span class="pagination-highlight">' + end + '</span> of <span class="pagination-highlight">' + total + '</span> Results';
            }
        }

        // Pagination buttons
        if (pageButtons) {
            var pHtml = '';
            if (totalPages > 0) {
                pHtml += '<button class="page-btn prev-btn"' + (umTemplateCurrentPage === 1 ? ' disabled' : '') + ' data-template-page="' + (umTemplateCurrentPage - 1) + '">Previous</button>';
                var pages = getPageRange(umTemplateCurrentPage, totalPages);
                for (var p = 0; p < pages.length; p++) {
                    if (pages[p] === '...') {
                        pHtml += '<span class="page-ellipsis">...</span>';
                    } else {
                        pHtml += '<button class="page-btn' + (pages[p] === umTemplateCurrentPage ? ' active' : '') + '" data-template-page="' + pages[p] + '">' + pages[p] + '</button>';
                    }
                }
                pHtml += '<button class="page-btn next-btn"' + (umTemplateCurrentPage === totalPages ? ' disabled' : '') + ' data-template-page="' + (umTemplateCurrentPage + 1) + '">Next</button>';
            }
            pageButtons.innerHTML = pHtml;
        }
    }

    // --- UM Template Table Event Delegation ---
    var umTemplateTableBody = document.getElementById('umTemplateTableBody');
    var umActiveTemplateDropdown = null;

    if (umTemplateTableBody) {
        umTemplateTableBody.addEventListener('click', function (e) {
            // Close any open dropdown
            var existingOpen = document.querySelector('.um-action-dropdown.open');

            // 3-dot menu click
            var dotsBtn = e.target.closest('.um-action-dots');
            if (dotsBtn) {
                e.stopPropagation();
                var templateId = dotsBtn.getAttribute('data-template-id');
                var dropdown = document.getElementById('umTemplateDropdown_' + templateId);
                if (existingOpen && existingOpen !== dropdown) {
                    existingOpen.classList.remove('open');
                }
                if (dropdown) {
                    dropdown.classList.toggle('open');
                    umActiveTemplateDropdown = dropdown.classList.contains('open') ? dropdown : null;
                }
                return;
            }

            // Dropdown item click
            var dropItem = e.target.closest('.um-action-dropdown-item');
            if (dropItem) {
                e.stopPropagation();
                var action = dropItem.getAttribute('data-action');
                var tid = parseInt(dropItem.getAttribute('data-template-id'), 10);
                if (existingOpen) existingOpen.classList.remove('open');
                umActiveTemplateDropdown = null;

                if (action === 'delete') {
                    // Show delete confirmation
                    var template = umTemplates.find(function(t) { return t.id === tid; });
                    if (template && confirm('Are you sure you want to delete the template "' + template.name + '"?')) {
                        // Remove template
                        umTemplates = umTemplates.filter(function(t) { return t.id !== tid; });
                        umRenderTemplateTable();
                        umShowToast('Template deleted successfully');
                    }
                } else if (action === 'edit') {
                    // Edit template (you can implement this later)
                    umShowToast('Edit template feature coming soon!');
                }
                return;
            }
        });
    }

    // Template Pagination clicks
    var umTemplatePageButtons = document.getElementById('umTemplatePageButtons');
    if (umTemplatePageButtons) {
        umTemplatePageButtons.addEventListener('click', function (e) {
            var btn = e.target.closest('.page-btn');
            if (!btn || btn.disabled) return;
            var p = parseInt(btn.getAttribute('data-template-page'), 10);
            if (p >= 1) {
                umTemplateCurrentPage = p;
                umRenderTemplateTable();
            }
        });
    }

    // Template Page Size selector
    var umTemplatePageSizeSelect = document.getElementById('umTemplatePageSizeSelect');
    if (umTemplatePageSizeSelect) {
        umTemplatePageSizeSelect.addEventListener('change', function () {
            umTemplatePageSize = parseInt(this.value, 10);
            umTemplateCurrentPage = 1;
            umRenderTemplateTable();
        });
    }

    // --- Template Filter Toggle ---
    var umTemplateFilterToggleBtn = document.getElementById('umTemplateFilterToggleBtn');
    var umTemplateFilterPanel = document.getElementById('umTemplateFilterPanel');
    if (umTemplateFilterToggleBtn && umTemplateFilterPanel) {
        umTemplateFilterToggleBtn.addEventListener('click', function () {
            umTemplateFilterPanel.classList.toggle('open');
        });
    }

    // --- Template Filter Change Handler ---
    /**
    * Handle changes to a template filter: update internal filter state, refresh the filter badge, re-render the template table, and update available filter options.
    * @example
    * umOnTemplateFilterChange('templateName', ['Invoice'])
    * undefined
    * @param {string} key - The filter key being changed (e.g., 'templateName').
    * @param {Array<string>} values - The new selected values for the specified filter.
    * @returns {void} No return value; updates global state and UI directly.
    */
    function umOnTemplateFilterChange(key, values) {
        umTemplateFilters[key] = values;
        umTemplateCurrentPage = 1;

        // Update filter badge
        var activeCount = 0;
        if (umTemplateFilters.templateName && umTemplateFilters.templateName.length > 0) {
            activeCount = 1;
        }

        var badge = document.getElementById('umTemplateFilterBadge');
        if (badge) {
            if (activeCount > 0) {
                badge.textContent = activeCount;
                badge.style.display = '';
            } else {
                badge.style.display = 'none';
            }
        }

        umRenderTemplateTable();
        umUpdateTemplateFilterOptions();
    }

    // --- Update Template Filter Options ---
    /**
    * Updates the template name filter options from the unique names found in the global umAllTemplates array.
    * @example
    * umUpdateTemplateFilterOptions()
    * undefined
    * @returns {void} Updates the filter UI; does not return a value.
    **/
    function umUpdateTemplateFilterOptions() {
        // Get unique template names
        var nameSet = {};
        for (var i = 0; i < umAllTemplates.length; i++) {
            nameSet[umAllTemplates[i].name] = true;
        }
        var names = Object.keys(nameSet).sort();

        // Update templateName filter
        if (umTemplateFilterInstances.templateName) {
            umTemplateFilterInstances.templateName.setOptions(names);
        }
    }

    // --- Initialize Template Filters ---
    /**
    * Initialize SearchableSelect instances for template filter elements (elements with class 'searchable-select um-filter'), set their data-key attribute from data-um-key, store instances in umTemplateFilterInstances, and refresh available options.
    * @example
    * initTemplateFilters()
    * undefined
    * @returns {void} No return value; function initializes UI components and updates filter options.
    */
    (function initTemplateFilters() {
        var containers = document.querySelectorAll('.searchable-select.um-filter');
        for (var i = 0; i < containers.length; i++) {
            var el = containers[i];
            var key = el.getAttribute('data-um-key');
            if (key) {
                // Temporarily set data-key for SearchableSelect constructor
                el.setAttribute('data-key', key);
                var ss = new SearchableSelect(el, umOnTemplateFilterChange);
                umTemplateFilterInstances[key] = ss;
            }
        }
        umUpdateTemplateFilterOptions();
    })();

    // --- Clear Template Filters ---
    var umTemplateClearFiltersBtn = document.getElementById('umTemplateClearFiltersBtn');
    if (umTemplateClearFiltersBtn) {
        umTemplateClearFiltersBtn.addEventListener('click', function () {
            for (var key in umTemplateFilterInstances) {
                if (umTemplateFilterInstances.hasOwnProperty(key)) {
                    umTemplateFilterInstances[key].clear();
                }
            }
            umOnTemplateFilterChange('templateName', []);
        });
    }

    // --- UM Table Event Delegation ---
    var umTableBody = document.getElementById('umTableBody');
    var umActiveDropdown = null;

    if (umTableBody) {
        umTableBody.addEventListener('click', function (e) {
            // Close any open dropdown
            var existingOpen = document.querySelector('.um-action-dropdown.open');

            // 3-dot menu click
            var dotsBtn = e.target.closest('.um-action-dots');
            if (dotsBtn) {
                e.stopPropagation();
                var userId = dotsBtn.getAttribute('data-user-id');
                var dropdown = document.getElementById('umDropdown_' + userId);
                if (existingOpen && existingOpen !== dropdown) {
                    existingOpen.classList.remove('open');
                }
                if (dropdown) {
                    dropdown.classList.toggle('open');
                    umActiveDropdown = dropdown.classList.contains('open') ? dropdown : null;
                }
                return;
            }

            // Dropdown item click
            var dropItem = e.target.closest('.um-action-dropdown-item');
            if (dropItem) {
                e.stopPropagation();
                var action = dropItem.getAttribute('data-action');
                var uid = parseInt(dropItem.getAttribute('data-user-id'), 10);
                if (existingOpen) existingOpen.classList.remove('open');
                umActiveDropdown = null;

                if (action === 'delete') {
                    umShowDeleteModal(uid);
                } else if (action === 'rights') {
                    umOpenAssignRights(uid);
                } else if (action === 'edit') {
                    umOpenEditPanel(uid);
                }
                return;
            }
        });
    }

    // Close dropdown on outside click
    document.addEventListener('click', function () {
        if (umActiveDropdown) {
            umActiveDropdown.classList.remove('open');
            umActiveDropdown = null;
        }
        if (umActiveTemplateDropdown) {
            umActiveTemplateDropdown.classList.remove('open');
            umActiveTemplateDropdown = null;
        }
    });

    // --- Create / Edit User ---
    var umCreateOverlay = document.getElementById('umCreateOverlay');
    var umCreateClose = document.getElementById('umCreateClose');
    var umCreateSubmit = document.getElementById('umCreateSubmit');
    var umCreateUserBtn = document.getElementById('umCreateUserBtn');
    var umPanelTitle = document.getElementById('umPanelTitle');
    var umEditingUserId = null;
    var umWantAssignRights = false;
    var umWizardPopulated = false;
    var umCurrentScreen = 'form';
    var umEditRightsMode = false; // True when editing rights only (from table 3-dot menu)

    // --- Panel Screen Management ---
    /**
    * Switches the create-panel UI to the specified screen, updating title, footer, button text/visibility, template indicator, and scroll position.
    * @example
    * umShowPanelScreen('wizard-1')
    * undefined
    * @param {{string}} {{screenName}} - Target screen identifier ('form', 'wizard-1', 'wizard-2', 'wizard-3', 'wizard-summary', or 'done').
    * @returns {{void}} Does not return a value.
    **/
    function umShowPanelScreen(screenName) {
        umCurrentScreen = screenName;
        var screenMap = {
            'form': 'umScreenForm', 'wizard-1': 'umScreenWizard1', 'wizard-2': 'umScreenWizard2',
            'wizard-3': 'umScreenWizard3', 'wizard-summary': 'umScreenWizardSummary', 'done': 'umScreenDone'
        };
        var footerMap = {
            'form': 'umFooterForm', 'wizard-1': 'umFooterWizard', 'wizard-2': 'umFooterWizard',
            'wizard-3': 'umFooterWizard', 'wizard-summary': 'umFooterWizard', 'done': 'umFooterDone'
        };
        var titleMap = {
            'form': umEditingUserId !== null ? 'Edit User' : 'Create User',
            'wizard-1': umEditRightsMode ? 'Edit Rights' : 'Assign Rights',
            'wizard-2': umEditRightsMode ? 'Edit Rights' : 'Assign Rights',
            'wizard-3': umEditRightsMode ? 'Edit Rights' : 'Assign Rights',
            'wizard-summary': umEditRightsMode ? 'Review & Save' : 'Review & Create',
            'done': ''
        };

        var allScreens = document.querySelectorAll('#umCreatePanel .um-panel-screen');
        for (var i = 0; i < allScreens.length; i++) allScreens[i].classList.remove('active');
        var target = document.getElementById(screenMap[screenName]);
        if (target) target.classList.add('active');

        var allFooters = document.querySelectorAll('.um-footer-screen');
        for (var i = 0; i < allFooters.length; i++) allFooters[i].classList.remove('active');
        var tf = document.getElementById(footerMap[screenName]);
        if (tf) tf.classList.add('active');

        umPanelTitle.textContent = titleMap[screenName];

        // Update Next button text on summary screen
        var nextBtn = document.getElementById('umWizardNext');
        if (nextBtn) {
            if (screenName === 'wizard-summary') {
                nextBtn.textContent = umEditRightsMode ? 'Save Rights' : 'Create User';
            } else {
                nextBtn.textContent = 'Next';
            }
        }

        // Hide Back button on step 1, or in edit rights mode on step 1
        var backBtn = document.getElementById('umWizardBack');
        if (backBtn) {
            if (screenName === 'wizard-1') {
                backBtn.style.display = 'none';
            } else {
                backBtn.style.display = '';
            }
        }

        // Hide "Modify User Details" buttons when in edit rights mode (no user details to modify)
        var modifyLinks = document.querySelectorAll('.um-wizard-modify-link');
        for (var i = 0; i < modifyLinks.length; i++) {
            modifyLinks[i].style.display = umEditRightsMode ? 'none' : '';
        }

        // Update template indicator when entering step 3
        if (screenName === 'wizard-3') umUpdateTemplateIndicator();

        // Scroll body to top
        var body = document.querySelector('#umCreatePanel .um-slidein-body');
        if (body) body.scrollTop = 0;
    }

    // --- Populate wizard checklists ---
    /**
    * Populate the wizard checklist DOMs from existing checkbox inputs, re-bind the rights checkbox listener, and update initial counts.
    * @example
    * umPopulateWizardChecklists()
    * undefined
    * @param {void} none - This function does not accept any arguments.
    * @returns {void} Does not return a value.
    **/
    function umPopulateWizardChecklists() {
        if (umWizardPopulated) return;
        var lists = [
            { src: '#umBranchList input[type="checkbox"]', attr: 'data-branch', dest: 'umWizardBranchList', wAttr: 'data-wizard-branch' },
            { src: '#umDeptList input[type="checkbox"]', attr: 'data-dept', dest: 'umWizardDeptList', wAttr: 'data-wizard-dept' },
            { src: '#umRightsList input[type="checkbox"]', attr: 'data-right', dest: 'umWizardRightsList', wAttr: 'data-wizard-right' }
        ];
        for (var l = 0; l < lists.length; l++) {
            var boxes = document.querySelectorAll(lists[l].src);
            var html = '';
            for (var i = 0; i < boxes.length; i++) {
                var lbl = boxes[i].closest('.um-rights-checkbox');
                html += '<label class="um-rights-checkbox"><input type="checkbox" ' + lists[l].wAttr + '="' + esc(boxes[i].getAttribute(lists[l].attr)) + '"><span class="checkbox-custom"></span>' + esc(lbl.textContent.trim()) + '</label>';
            }
            document.getElementById(lists[l].dest).innerHTML = html;
        }
        umWizardPopulated = true;
        // Re-setup rights checkbox listener since DOM was replaced
        umSetupRightsCheckboxListener();
        // Update initial counts
        umUpdateWizardCount('umWizardBranchList', 'umWizardBranchCount');
        umUpdateWizardCount('umWizardDeptList', 'umWizardDeptCount');
        umUpdateWizardCount('umWizardRightsList', 'umWizardRightsCount');
    }

    // --- Read wizard selections ---
    /**
    * Read the currently selected branches, departments, rights and chosen template from the user-management wizard and return them as a structured object.
    * @example
    * umReadWizardSelections()
    * { branches: ['North Branch','South Branch'], departments: ['Sales','Support'], rights: ['Read','Write'], template: 'Standard Template', isCustom: false }
    * @returns {Object} Object containing arrays of selected branches, departments and rights, the selected template text (or empty string) and a boolean isCustom flag.
    **/
    function umReadWizardSelections() {
        var result = { branches: [], departments: [], rights: [], template: '', isCustom: false };
        var bBoxes = document.querySelectorAll('#umWizardBranchList input:checked');
        for (var i = 0; i < bBoxes.length; i++) result.branches.push(bBoxes[i].closest('.um-rights-checkbox').textContent.trim());
        var dBoxes = document.querySelectorAll('#umWizardDeptList input:checked');
        for (var i = 0; i < dBoxes.length; i++) result.departments.push(dBoxes[i].closest('.um-rights-checkbox').textContent.trim());
        var rBoxes = document.querySelectorAll('#umWizardRightsList input:checked');
        for (var i = 0; i < rBoxes.length; i++) result.rights.push(rBoxes[i].closest('.um-rights-checkbox').textContent.trim());
        var tplEl = document.getElementById('umWizardTemplateDropdown');
        if (tplEl && tplEl.value && tplEl.value !== '' && tplEl.value !== 'custom') {
            result.template = tplEl.options[tplEl.selectedIndex].text;
        } else if (result.rights.length > 0) {
            result.isCustom = true;
        }
        return result;
    }

    // --- Build wizard summary with edit buttons ---
    /**
    * Build and render the wizard summary inside the element #umWizardSummaryContent, showing user details, selected branches, departments and rights, and attach edit button handlers.
    * @example
    * umBuildWizardSummary()
    * undefined
    * @returns {void} Does not return a value.
    **/
    function umBuildWizardSummary() {
        var el = document.getElementById('umWizardSummaryContent');
        if (!el) return;
        var sel = umReadWizardSelections();
        var name = document.getElementById('umNewUserName').value.trim();
        var phone = document.getElementById('umNewUserPhone').value.trim();
        var email = document.getElementById('umNewUserEmail').value.trim();

        var html = '';

        // User Details Section (only show when creating user, not when editing rights only)
        if (!umEditRightsMode) {
            html += '<div class="um-wizard-summary-group">';
            html += '<div class="um-wizard-summary-header"><span class="um-wizard-summary-label">User Details</span>';
            html += '<button type="button" class="um-wizard-summary-edit" data-edit-screen="form"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> Edit</button></div>';
            html += '<div class="um-wizard-summary-user-details">';
            html += '<div class="um-wizard-summary-detail"><span class="um-summary-detail-label">Name:</span><span class="um-summary-detail-value">' + esc(name) + '</span></div>';
            html += '<div class="um-wizard-summary-detail"><span class="um-summary-detail-label">Phone:</span><span class="um-summary-detail-value">' + esc(phone) + '</span></div>';
            if (email) {
                html += '<div class="um-wizard-summary-detail"><span class="um-summary-detail-label">Email:</span><span class="um-summary-detail-value">' + esc(email) + '</span></div>';
            }
            html += '</div>';
            html += '</div>';
        }

        // Branches
        html += '<div class="um-wizard-summary-group">';
        html += '<div class="um-wizard-summary-header"><span class="um-wizard-summary-label">Branches</span>';
        html += '<button type="button" class="um-wizard-summary-edit" data-edit-screen="wizard-1"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> Edit</button></div>';
        if (sel.branches.length) {
            html += '<div class="um-wizard-summary-chips">';
            for (var i = 0; i < sel.branches.length; i++) html += '<span class="um-wizard-chip">' + esc(sel.branches[i]) + '</span>';
            html += '</div>';
        } else { html += '<p class="um-wizard-summary-empty">None selected</p>'; }
        html += '</div>';

        // Departments
        html += '<div class="um-wizard-summary-group">';
        html += '<div class="um-wizard-summary-header"><span class="um-wizard-summary-label">Departments</span>';
        html += '<button type="button" class="um-wizard-summary-edit" data-edit-screen="wizard-2"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> Edit</button></div>';
        if (sel.departments.length) {
            html += '<div class="um-wizard-summary-chips">';
            for (var i = 0; i < sel.departments.length; i++) html += '<span class="um-wizard-chip">' + esc(sel.departments[i]) + '</span>';
            html += '</div>';
        } else { html += '<p class="um-wizard-summary-empty">None selected</p>'; }
        html += '</div>';

        // Rights section — show differently based on template vs manual selection
        html += '<div class="um-wizard-summary-group">';
        html += '<div class="um-wizard-summary-header"><span class="um-wizard-summary-label">Rights</span>';
        html += '<button type="button" class="um-wizard-summary-edit" data-edit-screen="wizard-3"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> Edit</button></div>';

        if (sel.template) {
            // Template selected — show template name and the rights it includes
            html += '<p class="um-wizard-template-text"><span class="um-template-label">Template:</span> ' + esc(sel.template) + '</p>';
            if (sel.rights.length) {
                html += '<p class="um-wizard-rights-note">Rights included:</p>';
                html += '<div class="um-wizard-summary-chips">';
                for (var i = 0; i < sel.rights.length; i++) html += '<span class="um-wizard-chip">' + esc(sel.rights[i]) + '</span>';
                html += '</div>';
            }
        } else if (sel.isCustom && sel.rights.length) {
            // Custom rights — user manually selected checkboxes
            html += '<p class="um-wizard-template-text"><span class="um-custom-label">Custom Rights</span></p>';
            html += '<p class="um-wizard-rights-note">Rights selected:</p>';
            html += '<div class="um-wizard-summary-chips">';
            for (var i = 0; i < sel.rights.length; i++) html += '<span class="um-wizard-chip">' + esc(sel.rights[i]) + '</span>';
            html += '</div>';
        } else {
            html += '<p class="um-wizard-summary-empty">None selected</p>';
        }
        html += '</div>';

        el.innerHTML = html;

        // Attach edit button handlers
        var editBtns = el.querySelectorAll('.um-wizard-summary-edit');
        for (var i = 0; i < editBtns.length; i++) {
            editBtns[i].addEventListener('click', function () {
                umShowPanelScreen(this.getAttribute('data-edit-screen'));
            });
        }
    }

    // --- Done screen ---
    /**
    * Update the UI to show a completion screen for a newly created user, including assigned rights summary when present.
    * @example
    * umShowDoneScreen('Alice', true, { branches: ['NY'], departments: ['Sales'], rights: ['Read'], template: 'Default' })
    * undefined
    * @param {{string}} {{userName}} - The display name of the user that was created.
    * @param {{boolean}} {{withRights}} - Whether rights/assignments were provided and should be shown.
    * @param {{Object}} {{selections}} - Object containing selections: branches, departments, rights arrays and an optional template string.
    * @returns {{void}} No return value; updates the DOM to display the done panel.
    **/
    function umShowDoneScreen(userName, withRights, selections) {
        var titleEl = document.getElementById('umDoneTitle');
        var subtitleEl = document.getElementById('umDoneSubtitle');
        var summaryEl = document.getElementById('umDoneSummary');

        if (withRights && selections) {
            titleEl.textContent = userName + ' created with rights assigned';
            subtitleEl.textContent = '';
            var html = '';
            var groups = [
                { label: 'Branches', items: selections.branches },
                { label: 'Departments', items: selections.departments },
                { label: 'Rights', items: selections.rights }
            ];
            if (selections.template) groups.push({ label: 'Template', items: [selections.template] });
            for (var g = 0; g < groups.length; g++) {
                if (!groups[g].items.length) continue;
                html += '<div class="um-wizard-summary-group"><span class="um-wizard-summary-label">' + esc(groups[g].label) + '</span><div class="um-wizard-summary-chips">';
                for (var j = 0; j < groups[g].items.length; j++) html += '<span class="um-wizard-chip">' + esc(groups[g].items[j]) + '</span>';
                html += '</div></div>';
            }
            summaryEl.innerHTML = html;
        } else {
            titleEl.textContent = userName + ' created successfully';
            subtitleEl.textContent = 'You can assign rights later from the user table.';
            summaryEl.innerHTML = '';
        }
        umShowPanelScreen('done');
    }

    // --- Selection counter helper ---
    function umUpdateWizardCount(listId, countId) {
        var boxes = document.querySelectorAll('#' + listId + ' input[type="checkbox"]');
        var checked = document.querySelectorAll('#' + listId + ' input[type="checkbox"]:checked');
        var el = document.getElementById(countId);
        if (el) {
            el.textContent = checked.length + ' of ' + boxes.length + ' selected';
            if (checked.length > 0) el.classList.add('has-selection');
            else el.classList.remove('has-selection');
        }
    }

    // --- Build previous selections chips ---
    /**
    * Build and render previous selection chips inside a container element identified by its ID.
    * @example
    * umBuildPrevSelections('prev-container', [{ label: 'Colors', items: ['Red', 'Blue'] }]);
    * undefined
    * @param {string} containerId - ID of the container element where selections will be rendered.
    * @param {Array<{label: string, items: string[]}>} groups - Array of groups, each with a label and an array of item strings.
    * @returns {void} No return value; the function updates the DOM directly.
    **/
    function umBuildPrevSelections(containerId, groups) {
        var el = document.getElementById(containerId);
        if (!el) return;
        var html = '';
        for (var g = 0; g < groups.length; g++) {
            if (!groups[g].items.length) continue;
            html += '<div class="um-wizard-prev-group">';
            html += '<span class="um-wizard-prev-label">' + esc(groups[g].label) + ':</span>';
            for (var i = 0; i < groups[g].items.length; i++) {
                html += '<span class="um-wizard-prev-chip">' + esc(groups[g].items[i]) + '</span>';
            }
            html += '</div>';
        }
        el.innerHTML = html;
    }

    // --- Template indicator logic (inside dropdown) ---
    /**
    * Update the template dropdown and wrapper classes to reflect a selected template or manually selected custom rights.
    * @example
    * umUpdateTemplateIndicator()
    * undefined
    * @returns {{void}} Updates DOM: toggles 'is-custom'/'is-template' on #umWizardTemplateWrap, manages the disabled "custom" option in #umWizardTemplateDropdown, and sets the select value.
    **/
    function umUpdateTemplateIndicator() {
        var wrap = document.getElementById('umWizardTemplateWrap');
        var tplEl = document.getElementById('umWizardTemplateDropdown');
        if (!wrap || !tplEl) return;

        var checkedRights = document.querySelectorAll('#umWizardRightsList input[type="checkbox"]:checked');
        var customOption = tplEl.querySelector('option[value="custom"]');

        wrap.classList.remove('is-custom', 'is-template');

        if (tplEl.value && tplEl.value !== 'custom' && tplEl.value !== '') {
            // A real template is selected
            wrap.classList.add('is-template');
            // Remove custom option if it exists
            if (customOption) customOption.remove();
        } else if (checkedRights.length > 0) {
            // Manual checkboxes selected — add and select "Custom Rights" option
            if (!customOption) {
                customOption = document.createElement('option');
                customOption.value = 'custom';
                customOption.disabled = true;
                customOption.textContent = 'Custom Rights';
                // Insert as second option (after "Select Template")
                tplEl.insertBefore(customOption, tplEl.options[1]);
            }
            tplEl.value = 'custom';
            wrap.classList.add('is-custom');
        } else {
            // Nothing selected — remove custom option and reset
            if (customOption) customOption.remove();
            tplEl.value = '';
        }
    }

    // --- Wizard rights checkbox change listener (delegated) ---
    /**
     * Attach a change listener to the "umWizardRightsList" element so manual checkbox toggles switch the template dropdown to "custom" (if applicable), update the template indicator, and refresh the rights count.
     * @example
     * umSetupRightsCheckboxListener()
     * undefined
     * @returns {void} Does not return a value.
     */
    function umSetupRightsCheckboxListener() {
        var list = document.getElementById('umWizardRightsList');
        if (!list) return;
        list.addEventListener('change', function (e) {
            if (e.target.type === 'checkbox') {
                // If user manually checks/unchecks, switch to custom
                var tplEl = document.getElementById('umWizardTemplateDropdown');
                if (tplEl && tplEl.value !== '' && tplEl.value !== 'custom') {
                    // Clear template when user manually changes checkboxes
                    tplEl.value = 'custom';
                }
                umUpdateTemplateIndicator();
                umUpdateWizardCount('umWizardRightsList', 'umWizardRightsCount');
            }
        });
    }

    // --- Template dropdown change handler ---
    var umTplDropdown = document.getElementById('umWizardTemplateDropdown');
    if (umTplDropdown) {
        umTplDropdown.addEventListener('change', function () {
            umUpdateTemplateIndicator();
        });
    }

    // --- Create new template link ---
    var umCreateTemplateLink = document.getElementById('umCreateTemplateLink');
    if (umCreateTemplateLink) {
        umCreateTemplateLink.addEventListener('click', function () {
            // Close the create user panel
            umCloseCreatePanel();
            // Switch to templates tab
            umSwitchTab('templates');
        });
    }

    // --- Reset wizard ---
    /**
    * Reset the user management wizard UI to its default state.
    * @example
    * umResetWizard()
    * undefined
    * @returns {void} No value is returned; the function updates the DOM to clear selections and reset UI elements.
    */
    function umResetWizard() {
        var boxes = document.querySelectorAll('#umWizardBranchList input[type="checkbox"], #umWizardDeptList input[type="checkbox"], #umWizardRightsList input[type="checkbox"]');
        for (var i = 0; i < boxes.length; i++) boxes[i].checked = false;
        var tpl = document.getElementById('umWizardTemplateDropdown');
        if (tpl) tpl.value = '';
        var summary = document.getElementById('umWizardSummaryContent');
        if (summary) summary.innerHTML = '';
        // Reset dropdown wrap styling
        var wrap = document.getElementById('umWizardTemplateWrap');
        if (wrap) wrap.classList.remove('is-custom', 'is-template');
        // Reset counters
        umUpdateWizardCount('umWizardBranchList', 'umWizardBranchCount');
        umUpdateWizardCount('umWizardDeptList', 'umWizardDeptCount');
        umUpdateWizardCount('umWizardRightsList', 'umWizardRightsCount');
        // Clear prev selections
        var prev2 = document.getElementById('umWizardPrevStep2');
        var prev3 = document.getElementById('umWizardPrevStep3');
        if (prev2) prev2.innerHTML = '';
        if (prev3) prev3.innerHTML = '';
    }

    // --- Toggle all helper (enhanced with count update) ---
    /**
    * Initialize a toggle button to select or unselect all checkboxes inside a given list and optionally update a counter.
    * @example
    * umSetupToggle('toggleBtn', 'itemsList', 'countDisplay')
    * undefined
    * @param {string} buttonId - ID of the button that will toggle the checkboxes.
    * @param {string} listId - ID of the container element that holds the checkbox inputs.
    * @param {string} [countId] - Optional ID of an element to update with the current selection count via umUpdateWizardCount.
    * @returns {void} Nothing is returned.
    */
    function umSetupToggle(buttonId, listId, countId) {
        var btn = document.getElementById(buttonId);
        if (!btn) return;
        btn.addEventListener('click', function () {
            var boxes = document.querySelectorAll('#' + listId + ' input[type="checkbox"]');
            var allChecked = true;
            for (var i = 0; i < boxes.length; i++) { if (!boxes[i].checked) { allChecked = false; break; } }
            for (var j = 0; j < boxes.length; j++) boxes[j].checked = !allChecked;
            btn.textContent = allChecked ? 'Select All' : 'Unselect All';
            if (countId) umUpdateWizardCount(listId, countId);
        });
    }
    umSetupToggle('umWizardBranchToggle', 'umWizardBranchList', 'umWizardBranchCount');
    umSetupToggle('umWizardDeptToggle', 'umWizardDeptList', 'umWizardDeptCount');

    // --- Checkbox change listeners for count updates (delegated) ---
    function umSetupCountListener(listId, countId) {
        var list = document.getElementById(listId);
        if (!list) return;
        list.addEventListener('change', function (e) {
            if (e.target.type === 'checkbox') umUpdateWizardCount(listId, countId);
        });
    }
    umSetupCountListener('umWizardBranchList', 'umWizardBranchCount');
    umSetupCountListener('umWizardDeptList', 'umWizardDeptCount');
    // Rights count is handled by the rights checkbox listener above

    // --- Setup rights listener ---
    umSetupRightsCheckboxListener();

    // --- Choice cards ---
    var umChoiceAssignNow = document.getElementById('umChoiceAssignNow');
    var umChoiceAssignLater = document.getElementById('umChoiceAssignLater');

    if (umChoiceAssignNow) {
        umChoiceAssignNow.addEventListener('click', function () {
            umWantAssignRights = true;
            umChoiceAssignNow.classList.add('active');
            umChoiceAssignLater.classList.remove('active');
            umCreateSubmit.textContent = 'Next';
        });
    }

    if (umChoiceAssignLater) {
        umChoiceAssignLater.addEventListener('click', function () {
            umWantAssignRights = false;
            umChoiceAssignLater.classList.add('active');
            umChoiceAssignNow.classList.remove('active');
            umCreateSubmit.textContent = 'Create User';
        });
    }

    // --- Wizard Navigation ---
    var umWizardNext = document.getElementById('umWizardNext');
    var umWizardBack = document.getElementById('umWizardBack');

    if (umWizardNext) {
        umWizardNext.addEventListener('click', function () {
            if (umCurrentScreen === 'wizard-1') {
                // Build prev selections for step 2
                var sel = umReadWizardSelections();
                umBuildPrevSelections('umWizardPrevStep2', [{ label: 'Branches', items: sel.branches }]);
                umShowPanelScreen('wizard-2');
            } else if (umCurrentScreen === 'wizard-2') {
                // Build prev selections for step 3
                var sel = umReadWizardSelections();
                umBuildPrevSelections('umWizardPrevStep3', [
                    { label: 'Branches', items: sel.branches },
                    { label: 'Departments', items: sel.departments }
                ]);
                umUpdateTemplateIndicator();
                umShowPanelScreen('wizard-3');
            } else if (umCurrentScreen === 'wizard-3') {
                umBuildWizardSummary();
                umShowPanelScreen('wizard-summary');
            } else if (umCurrentScreen === 'wizard-summary') {
                if (umEditRightsMode) {
                    umSaveUserRights();
                } else {
                    umCreateUserWithRights();
                }
            }
        });
    }

    if (umWizardBack) {
        umWizardBack.addEventListener('click', function () {
            if (umCurrentScreen === 'wizard-1') umShowPanelScreen('form');
            else if (umCurrentScreen === 'wizard-2') umShowPanelScreen('wizard-1');
            else if (umCurrentScreen === 'wizard-3') umShowPanelScreen('wizard-2');
            else if (umCurrentScreen === 'wizard-summary') umShowPanelScreen('wizard-3');
        });
    }

    // --- Modify User Details Links (delegated event handling) ---
    var umPanelBody = document.getElementById('umCreatePanel');
    if (umPanelBody) {
        umPanelBody.addEventListener('click', function (e) {
            var modifyBtn = e.target.closest('.um-wizard-modify-link');
            if (modifyBtn) {
                var targetScreen = modifyBtn.getAttribute('data-goto-screen');
                if (targetScreen) umShowPanelScreen(targetScreen);
            }
        });
    }

    // --- Create user with rights (from wizard summary) ---
    /**
    * Create a new user from the new-user form, assign a template/rights, add it to the global users list and update the UI.
    * @example
    * umCreateUserWithRights()
    * undefined
    * @returns {{void}} No return value.
    **/
    function umCreateUserWithRights() {
        var name = document.getElementById('umNewUserName').value.trim();
        var phone = document.getElementById('umNewUserPhone').value.trim();
        var email = document.getElementById('umNewUserEmail').value.trim();
        var selections = umReadWizardSelections();
        var tplEl = document.getElementById('umWizardTemplateDropdown');
        var tplKey = (tplEl && tplEl.value !== 'custom') ? tplEl.value : '';

        var newUser = {
            id: umNextId++, name: name, phone: phone, email: email,
            phoneVerified: false, emailVerified: false, superAdmin: false, template: tplKey
        };
        umAllUsers.push(newUser);
        umLastCreatedUser = newUser;
        umUpdateFilterOptions();
        umRenderTable();
        umShowToast('User created with rights assigned');
        umShowDoneScreen(name, true, selections);
    }

    // --- Save user rights (edit rights mode) ---
    /**
    * Save the current user's rights (template and selections) and refresh the UI; does nothing if no user is being edited.
    * @example
    * umSaveUserRights()
    * // undefined (updates global state and UI)
    * @returns {void} No return value; updates umAllUsers, filter options, table, and shows status messages.
    */
    function umSaveUserRights() {
        if (umEditingUserId === null) return;

        var userName = document.getElementById('umNewUserName').value.trim();
        var selections = umReadWizardSelections();
        var tplEl = document.getElementById('umWizardTemplateDropdown');
        var tplKey = (tplEl && tplEl.value !== 'custom') ? tplEl.value : '';

        // Find and update the user
        for (var i = 0; i < umAllUsers.length; i++) {
            if (umAllUsers[i].id === umEditingUserId) {
                umAllUsers[i].template = tplKey;
                // In a real app, you would save branches, departments, and individual rights here
                break;
            }
        }

        umUpdateFilterOptions();
        umRenderTable();
        umShowToast('Rights updated for ' + userName);
        umShowDoneScreen(userName, true, selections);
    }

    // --- Done button ---
    var umWizardDone = document.getElementById('umWizardDone');
    if (umWizardDone) {
        umWizardDone.addEventListener('click', function () { umCloseCreatePanel(); });
    }

    if (umCreateUserBtn) {
        umCreateUserBtn.addEventListener('click', function () { umOpenCreatePanel(); });
    }

    /**
    * Open and initialize the "Create User" panel: reset editing state, clear input fields, remove error classes, reset assign choices and wizard, show the form screen, and open the overlay.
    * @example
    * umOpenCreatePanel()
    * // opens the create-user overlay and prepares the form for a new user
    * @returns {void} No return value; UI state is updated and the create overlay is opened.
    */
    function umOpenCreatePanel() {
        umEditingUserId = null;
        umWantAssignRights = false;
        umEditRightsMode = false;
        umCreateSubmit.textContent = 'Create User';
        document.getElementById('umNewUserName').value = '';
        document.getElementById('umNewUserPhone').value = '';
        document.getElementById('umNewUserEmail').value = '';
        var groups = umCreateOverlay.querySelectorAll('.um-form-group');
        for (var i = 0; i < groups.length; i++) groups[i].classList.remove('has-error');
        var choiceSection = document.getElementById('umAssignChoiceSection');
        if (choiceSection) choiceSection.style.display = '';
        if (umChoiceAssignLater) umChoiceAssignLater.classList.remove('active');
        if (umChoiceAssignNow) umChoiceAssignNow.classList.remove('active');
        umResetWizard();
        umShowPanelScreen('form');
        umCreateOverlay.classList.add('open');
    }

    /**
    * Open the user edit panel and populate the form with the specified user's data.
    * @example
    * umOpenEditPanel(123)
    * undefined
    * @param {number|string} userId - ID of the user to load into the edit form.
    * @returns {void} No return value.
    **/
    function umOpenEditPanel(userId) {
        var user = null;
        for (var i = 0; i < umAllUsers.length; i++) {
            if (umAllUsers[i].id === userId) { user = umAllUsers[i]; break; }
        }
        if (!user) return;
        umEditingUserId = userId;
        umWantAssignRights = false;
        umCreateSubmit.textContent = 'Save Changes';
        document.getElementById('umNewUserName').value = user.name;
        document.getElementById('umNewUserPhone').value = user.phone;
        document.getElementById('umNewUserEmail').value = user.email || '';
        var groups = umCreateOverlay.querySelectorAll('.um-form-group');
        for (var i = 0; i < groups.length; i++) groups[i].classList.remove('has-error');
        var choiceSection = document.getElementById('umAssignChoiceSection');
        if (choiceSection) choiceSection.style.display = 'none';
        umShowPanelScreen('form');
        umCreateOverlay.classList.add('open');
    }

    /**
    * Close the "Create" panel UI, remove the overlay, reset editing state flags and UI choices.
    * @example
    * umCloseCreatePanel()
    * undefined
    * @returns {void} No return value.
    */
    function umCloseCreatePanel() {
        umCreateOverlay.classList.remove('open');
        umEditingUserId = null;
        setTimeout(function () {
            umWantAssignRights = false;
            umEditRightsMode = false;
            umShowPanelScreen('form');
            umResetWizard();
            if (umChoiceAssignLater) umChoiceAssignLater.classList.remove('active');
            if (umChoiceAssignNow) umChoiceAssignNow.classList.remove('active');
        }, 350);
    }

    if (umCreateClose) {
        umCreateClose.addEventListener('click', umCloseCreatePanel);
    }

    if (umCreateOverlay) {
        umCreateOverlay.addEventListener('click', function (e) {
            if (e.target === umCreateOverlay) umCloseCreatePanel();
        });
    }

    if (umCreateSubmit) {
        umCreateSubmit.addEventListener('click', function () {
            var name = document.getElementById('umNewUserName').value.trim();
            var phone = document.getElementById('umNewUserPhone').value.trim();
            var email = document.getElementById('umNewUserEmail').value.trim();
            var valid = true;

            var nameGroup = document.getElementById('umNewUserName').closest('.um-form-group');
            if (!name) { nameGroup.classList.add('has-error'); valid = false; } else { nameGroup.classList.remove('has-error'); }

            var phoneGroup = document.getElementById('umNewUserPhone').closest('.um-form-group');
            if (!phone || phone.length < 10 || !/^\d+$/.test(phone)) { phoneGroup.classList.add('has-error'); valid = false; } else { phoneGroup.classList.remove('has-error'); }

            var emailGroup = document.getElementById('umNewUserEmail').closest('.um-form-group');
            if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { emailGroup.classList.add('has-error'); valid = false; } else { emailGroup.classList.remove('has-error'); }

            if (!valid) return;

            if (umEditingUserId !== null) {
                // Edit mode — save changes
                for (var j = 0; j < umAllUsers.length; j++) {
                    if (umAllUsers[j].id === umEditingUserId) {
                        umAllUsers[j].name = name; umAllUsers[j].phone = phone; umAllUsers[j].email = email; break;
                    }
                }
                umCloseCreatePanel();
                umUpdateFilterOptions();
                umRenderTable();
                umShowToast('User updated successfully');
            } else if (umWantAssignRights) {
                // Assign Now → enter wizard
                umPopulateWizardChecklists();
                umShowPanelScreen('wizard-1');
            } else {
                // Assign Later → create user directly
                var newUser = {
                    id: umNextId++, name: name, phone: phone, email: email,
                    phoneVerified: false, emailVerified: false, superAdmin: false, template: ''
                };
                umAllUsers.push(newUser);
                umLastCreatedUser = newUser;
                umUpdateFilterOptions();
                umRenderTable();
                umShowToast('User created successfully');
                umShowDoneScreen(name, false);
            }
        });
    }

    // --- Toast ---
    /**
    * Display a temporary toast notification with the provided message.
    * @example
    * umShowToast('Saved successfully')
    * undefined
    * @param {string} msg - The message text to display inside the toast.
    * @returns {void} Does not return a value.
    **/
    function umShowToast(msg) {
        // Remove existing toast
        var old = document.querySelector('.um-toast');
        if (old) old.remove();

        var toast = document.createElement('div');
        toast.className = 'um-toast';
        toast.innerHTML = '<span class="um-toast-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span><span>' + esc(msg) + '</span>';
        document.body.appendChild(toast);

        // Animate in
        requestAnimationFrame(function () {
            toast.classList.add('show');
        });

        // Remove after 3s
        setTimeout(function () {
            toast.classList.remove('show');
            setTimeout(function () { toast.remove(); }, 300);
        }, 3000);
    }

    // --- Delete User ---
    var umDeleteModal = document.getElementById('umDeleteModal');
    var umDeleteCancel = document.getElementById('umDeleteCancel');
    var umDeleteConfirm = document.getElementById('umDeleteConfirm');
    var umDeleteTargetId = null;

    function umShowDeleteModal(userId) {
        umDeleteTargetId = userId;
        var user = umFindUser(userId);
        if (user) {
            document.getElementById('umDeleteUserName').textContent = user.name;
        }
        if (umDeleteModal) umDeleteModal.classList.add('visible');
    }

    function umHideDeleteModal() {
        if (umDeleteModal) umDeleteModal.classList.remove('visible');
        umDeleteTargetId = null;
    }

    if (umDeleteCancel) {
        umDeleteCancel.addEventListener('click', umHideDeleteModal);
    }

    if (umDeleteConfirm) {
        umDeleteConfirm.addEventListener('click', function () {
            if (umDeleteTargetId !== null) {
                umAllUsers = umAllUsers.filter(function (u) { return u.id !== umDeleteTargetId; });
                umUpdateFilterOptions();
                umRenderTable();
                umShowToast('User deleted successfully');
            }
            umHideDeleteModal();
        });
    }

    // --- Assign Rights ---
    function umFindUser(id) {
        for (var i = 0; i < umUsers.length; i++) {
            if (umUsers[i].id === id) return umUsers[i];
        }
        return null;
    }

    /**
    * Open the user rights assignment slide-in panel in edit mode for the specified user.
    * @example
    * umOpenAssignRights('user123')
    * undefined
    * @param {{string|number}} {{userId}} - The identifier of the user whose rights should be edited.
    * @returns {{void}} Does not return a value; opens the rights editor panel or no-ops if the user is not found.
    **/
    function umOpenAssignRights(userId) {
        var user = umFindUser(userId);
        if (!user) return;

        // Open the slide-in panel in "edit rights" mode
        umEditingUserId = userId;
        umEditRightsMode = true;
        umWantAssignRights = false;

        // Set user details (hidden but needed for summary)
        document.getElementById('umNewUserName').value = user.name;
        document.getElementById('umNewUserPhone').value = user.phone;
        document.getElementById('umNewUserEmail').value = user.email || '';

        // Populate wizard with existing data if available
        umPopulateWizardChecklists();
        // TODO: Load existing branches, departments, rights for this user

        // Show wizard step 1 directly (skip form)
        umPanelTitle.textContent = 'Edit Rights';
        umShowPanelScreen('wizard-1');
        umCreateOverlay.classList.add('open');
    }

    // Back to Users
    var umBackToUsers = document.getElementById('umBackToUsers');
    if (umBackToUsers) {
        umBackToUsers.addEventListener('click', function () {
            umShowView('manageUsers');
        });
    }

    // Save Rights
    var umSaveRightsBtn = document.getElementById('umSaveRightsBtn');
    if (umSaveRightsBtn) {
        umSaveRightsBtn.addEventListener('click', function () {
            umShowToast('Rights saved successfully');
            setTimeout(function () {
                umShowView('manageUsers');
            }, 500);
        });
    }

    // Branch toggle all
    var umBranchToggle = document.getElementById('umBranchToggle');
    if (umBranchToggle) {
        umBranchToggle.addEventListener('click', function () {
            var list = document.getElementById('umBranchList');
            var boxes = list.querySelectorAll('input[type="checkbox"]');
            var allChecked = true;
            for (var i = 0; i < boxes.length; i++) {
                if (!boxes[i].checked) { allChecked = false; break; }
            }
            for (var j = 0; j < boxes.length; j++) {
                boxes[j].checked = !allChecked;
            }
            this.textContent = allChecked ? 'Select All' : 'Unselect All';
        });
    }

    // Dept toggle all
    var umDeptToggle = document.getElementById('umDeptToggle');
    if (umDeptToggle) {
        umDeptToggle.addEventListener('click', function () {
            var list = document.getElementById('umDeptList');
            var boxes = list.querySelectorAll('input[type="checkbox"]');
            var allChecked = true;
            for (var i = 0; i < boxes.length; i++) {
                if (!boxes[i].checked) { allChecked = false; break; }
            }
            for (var j = 0; j < boxes.length; j++) {
                boxes[j].checked = !allChecked;
            }
            this.textContent = allChecked ? 'Select All' : 'Unselect All';
        });
    }

    // --- UM Initial Render ---
    umRenderTable();
    umUpdateFilterOptions();
    umRenderTemplateTable();
    umUpdateTemplateFilterOptions();

    // --- Initial Render ---
    renderTable();
}


// ==================== INIT ====================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
