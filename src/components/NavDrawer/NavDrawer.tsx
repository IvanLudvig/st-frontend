import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import useStyles from './styles'
import { ReactComponent as StartupsIcon } from '../../assets/icons/startups.svg';
import { ReactComponent as CorpsIcon } from '../../assets/icons/corps.svg';
import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';



export function NavDrawer() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => setOpen(true);

    const options = [
        { label: 'Стартапы и тех компании', link: ['/projects', '/'], icon: <StartupsIcon fill='#fff' /> },
        { label: 'Корпорации', link: [`/project/`], icon: <CorpsIcon fill='#fff' /> }
    ];


    return (
        <div>

            <Drawer
                variant='permanent'
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClosed]: !open,
                })}
                classes={{
                    paper: clsx(classes.paper, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClosed]: !open,
                    }),
                }}
            >

                <div className={classes.logo} >
                    <LogoIcon />
                </div>

                <div className={classes.burgerIconContainer} >
                    <div className={classes.burgerIcon} onClick={handleDrawerOpen} >
                        <BurgerIcon />
                    </div>
                </div>

                <div>
                    {options.map(option =>
                        <div
                            className={classes.listItem}
                            key={option.label}
                        >
                            <div key={'icon' + option.label} className={classes.iconContainer} >
                                {option.icon}
                            </div>
                            <span
                                key={'label' + option.label}
                                className={classes.listItemTextSelected}
                            >
                                {option.label}
                            </span>
                        </div>
                    )}
                </div>

            </Drawer>
        </div>
    );
}
