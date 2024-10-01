
# Styling Test

## Installation

To install the necessary dependencies, run the following command:

```bash
yarn
```

## Usage

To start the project, use the following command:

```bash
yarn start
```

## Requirements

### General Requirements:
1. **Pixel-Perfect Styling**: The implemented styling should match the provided mockup precisely.
2. **Responsive Layout**:
   - The layout should scale proportionally between 768px and 1680px screen widths.
   - Minimum layout width: **768px**.
   - Maximum layout width: **1680px**.
   - The font size should scale proportionally with the layout, if possible.
3. **Component Styling**: The visual appearance of any component should be controlled via a `variant` prop.
4. **Styling**: All components should be styled using **SCSS Modules**.
5. **Animations**: The following CSS transitions should be animated:
   - Color
   - Background color
   - Border color (if applicable)
6. **Global Styles**: Ensure `body` has no padding or margin.

### Component-Specific Requirements:

1. **Firm Facts Component**:
   - Only **one variant** of the component is required.
   - The component should implement the cards layout using `display: grid`.
   - The buttons' positions in the top row differ from those in the bottom row.
   - The component should be horizontally centered on the page and positioned **100px from the top** of the page.

2. **Firm Fact Card Component**:
   - The appearance of the component should be controlled by a `variant` prop.
   - Two variants of the **Firm Fact Card** are required:
     1. **default**: Top row variant. On hover, the entire background color should change to green.
     2. **border**: Bottom row variant. On hover, only the border color should change to green.

3. **Button Component**:
   - The appearance of the button should be controlled by a `variant` prop.
   - Two variants of the **Button** are required:
     1. **default**: 
        - The text should not wrap.
        - The button should only contain one line of text, maintain paddings, and truncate the text without an ellipsis.
     2. **icon**: 
        - The button should include an icon.
        - The button may have one or two lines of text.
        - It should maintain paddings and truncate the text with an ellipsis.
   - The button should have a styled **disabled state**.

## Deliverables

1. The **Firm Facts**, **Firm Fact Card**, and **Button** components must be implemented to precisely match the provided mockup.
2. Provide a link to a GitHub repository with the implemented solution.
3. After cloning the repository and running `yarn start`, the **Firm Facts** component should be rendered and positioned correctly according to the specifications.
