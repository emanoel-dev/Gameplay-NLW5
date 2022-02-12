import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';

import { GuildIcon } from '../GuildIcon';
import { styles } from './styles';
import PlayerSVG from '../../assets/player.svg';
import CalendarSVG from '../../assets/calendar.svg';

import { categories } from '../../utils/categories';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
    id: string;
    name: string;
    icon: null,
    owner: boolean;
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentProps;
}

export function Appointment({ data, ...rest }: Props) {
    const [category] = categories.filter(item => item.id === data.category)
    const { owner } = data.guild;
    const { primary, on } = theme.colors;

    return (
        <RectButton {...rest}>
            <View style={styles.container}>
                <GuildIcon />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            { data.guild.name }
                        </Text>

                        <Text style={styles.category}>
                            { category.title }
                        </Text>
                    </View>

                    <View styles={styles.footer}>
                        <View styles={styles.dateInfo}>
                            <CalendarSVG />
                            <Text style={styles.date}>
                                { data.date }
                            </Text>
                        </View>

                        <View style={styles.playerInfo}>
                            <PlayerSVG  fill={ owner ? primary : on }/>

                            <Text style={[
                                styles.players, { color: owner ? primary : on }
                            ]}>
                                { owner ? 'Anfitrião' : 'Visitante' }
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    );
}