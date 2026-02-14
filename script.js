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
var FILTER_KEYS = ['module', 'subModule', 'action', 'actionBy', 'empName', 'actionFrom', 'payrollDate', 'logTime'];

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
    for (var k in filterInstances) {
        if (filterInstances.hasOwnProperty(k) && filterInstances[k] !== this && filterInstances[k].isOpen) {
            filterInstances[k].close();
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

    function performPageNav(item, pageKey) {
        var allItems = document.querySelectorAll('.sidebar-item');
        for (var j = 0; j < allItems.length; j++) {
            allItems[j].classList.remove('active');
        }
        item.classList.add('active');

        for (var key in pageMap) {
            if (pageMap.hasOwnProperty(key)) {
                pageMap[key].classList.toggle('active', key === pageKey);
            }
        }

        if (window.innerWidth <= 1200) {
            sidebar.classList.remove('open');
            overlay.classList.remove('visible');
        }
    }

    var sidebarItems = document.querySelectorAll('.sidebar-item[data-page]');
    for (var si = 0; si < sidebarItems.length; si++) {
        sidebarItems[si].addEventListener('click', function (e) {
            e.preventDefault();
            var pageKey = this.getAttribute('data-page');
            if (!pageKey || !pageMap[pageKey]) return;

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

            // Smooth-scroll to target sub-section within the container
            var targetItem = mgmtItemMap[sectionKey];
            if (targetItem && mgmtScrollContainer) {
                mgmtScrollContainer.scrollTo({
                    top: targetItem.offsetTop - mgmtScrollContainer.offsetTop,
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
                            highlightSection(self.getAttribute('data-section'));
                        }, 'salarySlip');
                    } else {
                        performSettingsNav(firstSubLink);
                        highlightSection(firstSubLink.getAttribute('data-section'));
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

    function doManagementSave() {
        // Validate attendance first — if it fails, scroll to error
        if (attendanceDirty) {
            var attResult = doAttendanceSave();
            if (attResult === false) {
                // Scroll to attendance section
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
        if (shiftsDirty) doShiftsSave();
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

    if (mgmtCancelBtn) {
        mgmtCancelBtn.addEventListener('click', function () {
            resetAllManagement();
        });
    }

    // -- Generic unsaved modal --
    function showUnsavedModal(onComplete, source) {
        pendingNavAction = onComplete;
        pendingDirtySource = source || null;
        if (unsavedModalText) {
            unsavedModalText.textContent = 'You have unsaved changes. Do you want to discard these changes and continue, or cancel to stay on the current tab?';
        }
        if (unsavedModal) unsavedModal.classList.add('visible');
    }

    function hideUnsavedModal() {
        if (unsavedModal) unsavedModal.classList.remove('visible');
        pendingNavAction = null;
        pendingDirtySource = null;
    }

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

    // --- Initial Render ---
    renderTable();
}


// ==================== INIT ====================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
