document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.calc-button button');
    const blocks = document.querySelectorAll('.item-fifth-block');

    function hideAllBlocks() {
        blocks.forEach(block => {
            block.style.display = 'none';
            block.style.opacity = 0;
        });
    }

    function showBlock(targetId) {
        hideAllBlocks();
        const targetBlock = document.getElementById(targetId);
        targetBlock.style.display = 'block';
        targetBlock.style.opacity = 1;
    }

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            showBlock(targetId);
        });
    });

    showBlock('CBM');
});