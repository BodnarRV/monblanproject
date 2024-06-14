document.addEventListener("DOMContentLoaded", function() {
    /**
     * Swith posts display mode
     * 
     * @param {string} mode 
     */
    function handleModeSwitch(mode) {
        const postsWrapper = document.querySelector('[data-role="posts-wrapper"]');
        const rowModeButton = document.querySelector('[data-role="row-mode"]');
        const gridModeButton = document.querySelector('[data-role="grid-mode"]');
        
        document.querySelectorAll('.posts-mode').forEach(button => {
            button.classList.remove('__active');
        });

        postsWrapper.classList.remove('posts-wrapper_grid-mode', 'posts-wrapper_row-mode');

        if (mode === 'grid') {
            postsWrapper.classList.add('posts-wrapper_grid-mode');
            gridModeButton.classList.add('__active');
        } else if (mode === 'row') {
            postsWrapper.classList.add('posts-wrapper_row-mode');
            rowModeButton.classList.add('__active');
        }
    }

    document.querySelector('[data-role="row-mode"]').addEventListener('click', function() {
        handleModeSwitch('row');
    });

    document.querySelector('[data-role="grid-mode"]').addEventListener('click', function() {
        handleModeSwitch('grid');
    });
});
