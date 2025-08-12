// CATA User Attributes Documentation - Custom JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add table of contents functionality
    function createTableOfContents() {
        const mainContent = document.querySelector('.main-content');
        if (!mainContent) return;

        const headings = mainContent.querySelectorAll('h1, h2, h3');
        if (headings.length < 3) return; // Only create TOC if there are enough headings

        const toc = document.createElement('div');
        toc.className = 'table-of-contents';
        toc.innerHTML = `
            <h3>📋 Table of Contents</h3>
            <ul></ul>
        `;

        const tocList = toc.querySelector('ul');
        
        headings.forEach((heading, index) => {
            // Add ID to heading if it doesn't have one
            if (!heading.id) {
                heading.id = `heading-${index}`;
            }

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${heading.id}`;
            a.textContent = heading.textContent;
            a.className = `toc-${heading.tagName.toLowerCase()}`;
            
            li.appendChild(a);
            tocList.appendChild(li);
        });

        // Insert TOC after the first h1
        const firstH1 = mainContent.querySelector('h1');
        if (firstH1) {
            firstH1.parentNode.insertBefore(toc, firstH1.nextSibling);
        }
    }

    // Add search functionality
    function addSearchFunctionality() {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <input type="text" id="search-input" placeholder="🔍 Search attributes..." />
            <div id="search-results" class="search-results"></div>
        `;

        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.insertBefore(searchContainer, mainContent.firstChild);
        }

        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');

        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            if (query.length < 2) {
                searchResults.innerHTML = '';
                searchResults.style.display = 'none';
                return;
            }

            const tables = document.querySelectorAll('table');
            const results = [];

            tables.forEach(table => {
                const rows = table.querySelectorAll('tr');
                rows.forEach(row => {
                    const cells = row.querySelectorAll('td');
                    cells.forEach(cell => {
                        if (cell.textContent.toLowerCase().includes(query)) {
                            const attributeName = row.querySelector('td:first-child')?.textContent;
                            if (attributeName) {
                                results.push({
                                    attribute: attributeName,
                                    content: cell.textContent,
                                    element: row
                                });
                            }
                        }
                    });
                });
            });

            displaySearchResults(results, query);
        });
    }

    function displaySearchResults(results, query) {
        const searchResults = document.getElementById('search-results');
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p>No results found for "' + query + '"</p>';
        } else {
            const html = results.slice(0, 5).map(result => `
                <div class="search-result">
                    <strong>${result.attribute}</strong>: ${result.content}
                </div>
            `).join('');
            searchResults.innerHTML = html;
        }
        
        searchResults.style.display = 'block';
    }

    // Add copy functionality to code blocks
    function addCopyToCodeBlocks() {
        document.querySelectorAll('code').forEach(codeBlock => {
            if (codeBlock.textContent.length > 10) { // Only for longer code blocks
                const copyButton = document.createElement('button');
                copyButton.className = 'copy-button';
                copyButton.textContent = '📋';
                copyButton.title = 'Copy to clipboard';
                
                copyButton.addEventListener('click', function() {
                    navigator.clipboard.writeText(codeBlock.textContent).then(() => {
                        this.textContent = '✅';
                        setTimeout(() => {
                            this.textContent = '📋';
                        }, 2000);
                    });
                });
                
                codeBlock.parentNode.style.position = 'relative';
                codeBlock.parentNode.appendChild(copyButton);
            }
        });
    }

    // Add attribute highlighting
    function addAttributeHighlighting() {
        const attributeCells = document.querySelectorAll('td:first-child');
        attributeCells.forEach(cell => {
            if (cell.textContent.includes('`')) {
                cell.style.fontWeight = 'bold';
                cell.style.color = '#667eea';
            }
        });
    }

    // Add responsive table wrapper
    function wrapTables() {
        document.querySelectorAll('table').forEach(table => {
            if (!table.parentNode.classList.contains('table-wrapper')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'table-wrapper';
                table.parentNode.insertBefore(wrapper, table);
                wrapper.appendChild(table);
            }
        });
    }

    // Initialize all features
    createTableOfContents();
    addSearchFunctionality();
    addCopyToCodeBlocks();
    addAttributeHighlighting();
    wrapTables();

    // Add CSS for new features
    const style = document.createElement('style');
    style.textContent = `
        .table-of-contents {
            background: #f6f8fa;
            border: 1px solid #e1e4e8;
            border-radius: 6px;
            padding: 1rem;
            margin: 2rem 0;
        }
        
        .table-of-contents ul {
            list-style: none;
            padding-left: 0;
        }
        
        .table-of-contents li {
            margin: 0.5rem 0;
        }
        
        .table-of-contents a {
            text-decoration: none;
            color: #667eea;
        }
        
        .table-of-contents a:hover {
            text-decoration: underline;
        }
        
        .toc-h1 { font-weight: bold; }
        .toc-h2 { margin-left: 1rem; }
        .toc-h3 { margin-left: 2rem; }
        
        .search-container {
            margin: 2rem 0;
        }
        
        #search-input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #e1e4e8;
            border-radius: 6px;
            font-size: 1rem;
        }
        
        .search-results {
            display: none;
            background: white;
            border: 1px solid #e1e4e8;
            border-radius: 6px;
            margin-top: 0.5rem;
            max-height: 300px;
            overflow-y: auto;
        }
        
        .search-result {
            padding: 0.75rem;
            border-bottom: 1px solid #e1e4e8;
        }
        
        .search-result:last-child {
            border-bottom: none;
        }
        
        .copy-button {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 0.25rem 0.5rem;
            cursor: pointer;
            font-size: 0.8rem;
        }
        
        .table-wrapper {
            overflow-x: auto;
            margin: 1rem 0;
        }
        
        @media (max-width: 768px) {
            .table-wrapper {
                font-size: 0.9rem;
            }
        }
    `;
    document.head.appendChild(style);
});
