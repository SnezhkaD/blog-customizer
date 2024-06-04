import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';

import clsx from 'clsx';
import { useState } from 'react';

import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

import { OnClick } from '../arrow-button/ArrowButton';

import {
	OptionType,
	ArticleStateType,
	backgroundColors,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	contentWidthArr,
	defaultArticleState,
} from 'src/constants/articleProps';

interface ArticleParamsFormProps {
	handleClick: OnClick;
	state: boolean;
	setAppState: React.Dispatch<React.SetStateAction<ArticleStateType>>;
}

export const ArticleParamsForm = ({
	handleClick,
	state,
	setAppState,
}: ArticleParamsFormProps) => {
	const [formState, setFormState] =
		useState<ArticleStateType>(defaultArticleState);

	const handleSubmit = () => {
		setFormState(defaultArticleState);
		setAppState(defaultArticleState);
	};

	const handleReset = (evt: React.SyntheticEvent) => {
		evt.preventDefault();
		setAppState(formState);
	};

	const handleSelectChange = (fieldName: string) => {
		return (value: OptionType) => {
			setFormState((currentFormState) => ({
				...currentFormState,
				[fieldName]: value,
			}));
		};
	};

	return (
		<>
			<ArrowButton handleClick={handleClick} state={state} />
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: state,
				})}>
				<form className={styles.form} onSubmit={handleReset}>
					<Text as='h1' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						title='Шрифт'
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={handleSelectChange('fontFamilyOption')}
					/>
					<RadioGroup
						title='Размер шрифта'
						name='font-size'
						selected={formState.fontSizeOption}
						options={fontSizeOptions}
						onChange={handleSelectChange('fontSizeOption')}
					/>
					<Select
						title='Цвет шрифта'
						selected={formState.fontColor}
						options={fontColors}
						onChange={handleSelectChange('fontColor')}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={handleSelectChange('backgroundColor')}
					/>
					<Select
						title='Ширина контента'
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={handleSelectChange('contentWidth')}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleSubmit} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
// 	return (
// 		<>
// 			<ArrowButton />
// 			<aside className={styles.container}>
// 				<form className={styles.form}>
// 					<div className={styles.bottomContainer}>
// 						<Button title='Сбросить' type='reset' />
// 						<Button title='Применить' type='submit' />
// 					</div>
// 				</form>
// 			</aside>
// 		</>
// 	);
// };
