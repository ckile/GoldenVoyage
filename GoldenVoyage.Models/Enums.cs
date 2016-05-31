namespace GoldenVoyage.Models
{
    // 宾客属性
    public enum GuestAttribute
    {
        Temporary, Forever, Group, BlackList, Wanted, Contact, Sign
    }

    // 账户状态
    public enum AccountStatus
    {
        WaitingList, Booking, Cancel, NoShow, CheckedIn, CheckedOut,
        CheckUndo, Forever, WaitingListCancel, WalkIn
    }

    // 维修房属性
    public enum OutOfOrderAttribute
    {
        OutOfOrder, OutOfService
    }

    // 房价属性
    public enum RateAttribute
    { Full, Discounted, Complimentary, Day, Group, Contract, DefineCustom, AdvanceGroup, Hour }

    // 房间状态
    public enum RoomState
    { Null, Occasional, Suspended, Occupied, Vacant, OutOfOrder, OutOfService, DueIn, DueOut }

    // 交易属性
    public enum TransactType
    {
        RoomCharge, Restaurant, Recreation, Telephone, Commission, Business,
        Other, DownPayment, Deposit, Cash, Cheque, CreditCard, MemberCard,
        Voucher, Coupon, Ar, ForeignCurrency, PaidOut, ApCommission, ApPaidOut,
        ArPayment, Transfer, HotelCashier, Difference, FunctionalCurrency, GroupAr,
        GroupAp, Null
    }

    // 客房清扫状态
    public enum RoomCleanStatus
    { Null, TouchUp, Dirty, Clean, Checked }

    // 性别
    public enum GenderAttribute
    { Null, Male, Female }

    // 客户属性
    public enum CustomerAttribute
    { Null, Poterntial, Normal, Dormancy, Invalid }

    // 帐单属性
    public enum FolioAttribute
    { Normal, Deposit, Checked, Temp }

    // 会员卡属性
    public enum MemberCardAttribute
    { Normal, Credit, Debit, Count, Sign }

    // 锁房状态
    public enum RoomBlockStatus
    {
        Null, Suspended, OutOfOrder, OutOfService, SuspendEnd, OutOfOrderEnd, OutOfServiceEnd
    }

    // 交易属性
    public enum TransactAttribute
    { Debit, Credit, Transfer }

    // 收入类型
    public enum IncomeAttribute
    { Revenue, DirectDebit, Commission, Tax, Other }

    // 自动挂帐类型

    // 班次
    public enum ShiftAttribute
    { Early, Middle, MiddleLate, Late, Night, Other }

    // 操作员属性
    public enum UserAttribute
    {
        Null, Gm, Manager, Director, Supervisor, Captain, Normal, Sales, Bookkeeper, Other
    }

    // 工作站属性
    public enum WorkStationAttribute
    { Normal, Touch }

    // 楼区属性
    public enum BuildingAttribute
    { Room, Condominium, Office, DummyRoom }

    // 维修属性
    public enum RepairReasonAttribute
    { Repair, Disable, Close }

    // 国家属性
    public enum CountryAttribute
    { Normal, China, HongKong, AoMen, TaiWan }

    // VIP属性
    public enum VipAttribute
    { Normal, Secret, Vip, SecretAndVip }

    // 证件属性
    public enum IdAttribute
    { Normal, Id, Visa, DriverLicense }

    // 汇总方式
    public enum SummaryWay
    { Normal, Collect, Detail }

    // 客户类型属性
    public enum CustomerTypeAttribute
    { Null, Travel, Company, CreditCard }

    // 付款类型属性
    public enum PaymentTypeAttribute
    { Normal, Null, CreditCard, Ar }

    // 预定确认状态
    public enum ReservationConfirmedStatus
    { Unconfirmed, Confirmed }

    // 预定类型属性
    public enum ReservationTypeAttribute
    { Normal, Cash, CreditCard, Ar }

    // 帐户结帐标志
    public enum AccountCheckOutFlag
    { Normal, Beforehand, Ar, Latency }

    // 帐户禁止挂账标志
    public enum AccountNoPostFlag
    { Null, Some, All }

    // 帐户转帐标志
    public enum AccountTransferFlag
    { Null, Normal, Share }

    // 房价结构拆分属性
    public enum RateQuantityAttribute
    { Room, Guest, Adult, Child, Bed }

    // 特殊要求属性
    public enum SpecialRequestAttribute
    { Null, Breakfast, ExtraBed }

    // 团队标志
    public enum AccountGroupFlag
    { Normal = 1, Meeting }

    // 团队属性
    public enum GroupAttribute
    { Offer = 1, Opt, Initial, Open }

    // 房价属性

    public enum NoPostFlag
    { Null, Some, All }

    public enum MessageFlag
    { Null, Text, Voice }

    public enum TransferFlag
    { Null, Normal, Share }

    public enum CheckOutFlag
    { Normal, Beforehand, Ar, Latency }

    public enum SharePaymentAttribute
    {
        Null, Single, Share, Nc, Full
    }

    public enum ReservationGuaranteeAttribute
    {
        Normal, Cash, CreditCard, Ar
    }

    public enum QuantityAttribute
    {
        Room, Guest, Adult, Child, Bed
    }

    public enum AddressAttribute
    {
        Home, Office
    }

    public enum IdentityAttribute
    {
        Id, Visa, Other
    }

    public enum RemarkAttribute
    {
        Front, Cashier, Other
    }

    public enum UserRoles
    {
        ProwerUser, Administrator, Owin
    }

    public enum ReservationStatus
    {
        Booking, InHouse, CheckOut, WalkIn
    }
}