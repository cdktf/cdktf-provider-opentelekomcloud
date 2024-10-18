# `asGroupV1` Submodule <a name="`asGroupV1` Submodule" id="@cdktf/provider-opentelekomcloud.asGroupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsGroupV1 <a name="AsGroupV1" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1 opentelekomcloud_as_group_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

new asGroupV1.AsGroupV1(scope: Construct, id: string, config: AsGroupV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config">AsGroupV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config">AsGroupV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putLbaasListeners">putLbaasListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putSecurityGroups">putSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetAvailableZones">resetAvailableZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetCoolDownTime">resetCoolDownTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetDesireInstanceNumber">resetDesireInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditGracePeriod">resetHealthPeriodicAuditGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditMethod">resetHealthPeriodicAuditMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditTime">resetHealthPeriodicAuditTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetInstanceTerminatePolicy">resetInstanceTerminatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbaasListeners">resetLbaasListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbListenerId">resetLbListenerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMaxInstanceNumber">resetMaxInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMinInstanceNumber">resetMinInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetNotifications">resetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetScalingConfigurationId">resetScalingConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLbaasListeners` <a name="putLbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putLbaasListeners"></a>

```typescript
public putLbaasListeners(value: IResolvable | AsGroupV1LbaasListeners[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putLbaasListeners.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>[]

---

##### `putNetworks` <a name="putNetworks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putNetworks"></a>

```typescript
public putNetworks(value: IResolvable | AsGroupV1Networks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putNetworks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>[]

---

##### `putSecurityGroups` <a name="putSecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putSecurityGroups"></a>

```typescript
public putSecurityGroups(value: AsGroupV1SecurityGroups): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putSecurityGroups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts"></a>

```typescript
public putTimeouts(value: AsGroupV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>

---

##### `resetAvailableZones` <a name="resetAvailableZones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetAvailableZones"></a>

```typescript
public resetAvailableZones(): void
```

##### `resetCoolDownTime` <a name="resetCoolDownTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetCoolDownTime"></a>

```typescript
public resetCoolDownTime(): void
```

##### `resetDesireInstanceNumber` <a name="resetDesireInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetDesireInstanceNumber"></a>

```typescript
public resetDesireInstanceNumber(): void
```

##### `resetHealthPeriodicAuditGracePeriod` <a name="resetHealthPeriodicAuditGracePeriod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditGracePeriod"></a>

```typescript
public resetHealthPeriodicAuditGracePeriod(): void
```

##### `resetHealthPeriodicAuditMethod` <a name="resetHealthPeriodicAuditMethod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditMethod"></a>

```typescript
public resetHealthPeriodicAuditMethod(): void
```

##### `resetHealthPeriodicAuditTime` <a name="resetHealthPeriodicAuditTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditTime"></a>

```typescript
public resetHealthPeriodicAuditTime(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceTerminatePolicy` <a name="resetInstanceTerminatePolicy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetInstanceTerminatePolicy"></a>

```typescript
public resetInstanceTerminatePolicy(): void
```

##### `resetLbaasListeners` <a name="resetLbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbaasListeners"></a>

```typescript
public resetLbaasListeners(): void
```

##### `resetLbListenerId` <a name="resetLbListenerId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbListenerId"></a>

```typescript
public resetLbListenerId(): void
```

##### `resetMaxInstanceNumber` <a name="resetMaxInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMaxInstanceNumber"></a>

```typescript
public resetMaxInstanceNumber(): void
```

##### `resetMinInstanceNumber` <a name="resetMinInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMinInstanceNumber"></a>

```typescript
public resetMinInstanceNumber(): void
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetNotifications"></a>

```typescript
public resetNotifications(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetScalingConfigurationId` <a name="resetScalingConfigurationId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetScalingConfigurationId"></a>

```typescript
public resetScalingConfigurationId(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AsGroupV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isConstruct"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

asGroupV1.AsGroupV1.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformElement"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

asGroupV1.AsGroupV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformResource"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

asGroupV1.AsGroupV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

asGroupV1.AsGroupV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AsGroupV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AsGroupV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AsGroupV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AsGroupV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.currentInstanceNumber">currentInstanceNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instances">instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListeners">lbaasListeners</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList">AsGroupV1LbaasListenersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList">AsGroupV1NetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroups">securityGroups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference">AsGroupV1SecurityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference">AsGroupV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZonesInput">availableZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTimeInput">coolDownTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstancesInput">deleteInstancesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicipInput">deletePublicipInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumberInput">desireInstanceNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriodInput">healthPeriodicAuditGracePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethodInput">healthPeriodicAuditMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTimeInput">healthPeriodicAuditTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicyInput">instanceTerminatePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListenersInput">lbaasListenersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerIdInput">lbListenerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumberInput">maxInstanceNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumberInput">minInstanceNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networksInput">networksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notificationsInput">notificationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationIdInput">scalingConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupNameInput">scalingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroupsInput">securityGroupsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZones">availableZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTime">coolDownTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstances">deleteInstances</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicip">deletePublicip</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumber">desireInstanceNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriod">healthPeriodicAuditGracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethod">healthPeriodicAuditMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTime">healthPeriodicAuditTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicy">instanceTerminatePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerId">lbListenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumber">maxInstanceNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumber">minInstanceNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notifications">notifications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationId">scalingConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupName">scalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `currentInstanceNumber`<sup>Required</sup> <a name="currentInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.currentInstanceNumber"></a>

```typescript
public readonly currentInstanceNumber: number;
```

- *Type:* number

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

---

##### `lbaasListeners`<sup>Required</sup> <a name="lbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListeners"></a>

```typescript
public readonly lbaasListeners: AsGroupV1LbaasListenersList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList">AsGroupV1LbaasListenersList</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networks"></a>

```typescript
public readonly networks: AsGroupV1NetworksList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList">AsGroupV1NetworksList</a>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroups"></a>

```typescript
public readonly securityGroups: AsGroupV1SecurityGroupsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference">AsGroupV1SecurityGroupsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeouts"></a>

```typescript
public readonly timeouts: AsGroupV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference">AsGroupV1TimeoutsOutputReference</a>

---

##### `availableZonesInput`<sup>Optional</sup> <a name="availableZonesInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZonesInput"></a>

```typescript
public readonly availableZonesInput: string[];
```

- *Type:* string[]

---

##### `coolDownTimeInput`<sup>Optional</sup> <a name="coolDownTimeInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTimeInput"></a>

```typescript
public readonly coolDownTimeInput: number;
```

- *Type:* number

---

##### `deleteInstancesInput`<sup>Optional</sup> <a name="deleteInstancesInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstancesInput"></a>

```typescript
public readonly deleteInstancesInput: string;
```

- *Type:* string

---

##### `deletePublicipInput`<sup>Optional</sup> <a name="deletePublicipInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicipInput"></a>

```typescript
public readonly deletePublicipInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `desireInstanceNumberInput`<sup>Optional</sup> <a name="desireInstanceNumberInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumberInput"></a>

```typescript
public readonly desireInstanceNumberInput: number;
```

- *Type:* number

---

##### `healthPeriodicAuditGracePeriodInput`<sup>Optional</sup> <a name="healthPeriodicAuditGracePeriodInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriodInput"></a>

```typescript
public readonly healthPeriodicAuditGracePeriodInput: number;
```

- *Type:* number

---

##### `healthPeriodicAuditMethodInput`<sup>Optional</sup> <a name="healthPeriodicAuditMethodInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethodInput"></a>

```typescript
public readonly healthPeriodicAuditMethodInput: string;
```

- *Type:* string

---

##### `healthPeriodicAuditTimeInput`<sup>Optional</sup> <a name="healthPeriodicAuditTimeInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTimeInput"></a>

```typescript
public readonly healthPeriodicAuditTimeInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceTerminatePolicyInput`<sup>Optional</sup> <a name="instanceTerminatePolicyInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicyInput"></a>

```typescript
public readonly instanceTerminatePolicyInput: string;
```

- *Type:* string

---

##### `lbaasListenersInput`<sup>Optional</sup> <a name="lbaasListenersInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListenersInput"></a>

```typescript
public readonly lbaasListenersInput: IResolvable | AsGroupV1LbaasListeners[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>[]

---

##### `lbListenerIdInput`<sup>Optional</sup> <a name="lbListenerIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerIdInput"></a>

```typescript
public readonly lbListenerIdInput: string;
```

- *Type:* string

---

##### `maxInstanceNumberInput`<sup>Optional</sup> <a name="maxInstanceNumberInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumberInput"></a>

```typescript
public readonly maxInstanceNumberInput: number;
```

- *Type:* number

---

##### `minInstanceNumberInput`<sup>Optional</sup> <a name="minInstanceNumberInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumberInput"></a>

```typescript
public readonly minInstanceNumberInput: number;
```

- *Type:* number

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networksInput"></a>

```typescript
public readonly networksInput: IResolvable | AsGroupV1Networks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>[]

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notificationsInput"></a>

```typescript
public readonly notificationsInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `scalingConfigurationIdInput`<sup>Optional</sup> <a name="scalingConfigurationIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationIdInput"></a>

```typescript
public readonly scalingConfigurationIdInput: string;
```

- *Type:* string

---

##### `scalingGroupNameInput`<sup>Optional</sup> <a name="scalingGroupNameInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupNameInput"></a>

```typescript
public readonly scalingGroupNameInput: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: AsGroupV1SecurityGroups;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AsGroupV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `availableZones`<sup>Required</sup> <a name="availableZones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZones"></a>

```typescript
public readonly availableZones: string[];
```

- *Type:* string[]

---

##### `coolDownTime`<sup>Required</sup> <a name="coolDownTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTime"></a>

```typescript
public readonly coolDownTime: number;
```

- *Type:* number

---

##### `deleteInstances`<sup>Required</sup> <a name="deleteInstances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstances"></a>

```typescript
public readonly deleteInstances: string;
```

- *Type:* string

---

##### `deletePublicip`<sup>Required</sup> <a name="deletePublicip" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicip"></a>

```typescript
public readonly deletePublicip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `desireInstanceNumber`<sup>Required</sup> <a name="desireInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumber"></a>

```typescript
public readonly desireInstanceNumber: number;
```

- *Type:* number

---

##### `healthPeriodicAuditGracePeriod`<sup>Required</sup> <a name="healthPeriodicAuditGracePeriod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriod"></a>

```typescript
public readonly healthPeriodicAuditGracePeriod: number;
```

- *Type:* number

---

##### `healthPeriodicAuditMethod`<sup>Required</sup> <a name="healthPeriodicAuditMethod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethod"></a>

```typescript
public readonly healthPeriodicAuditMethod: string;
```

- *Type:* string

---

##### `healthPeriodicAuditTime`<sup>Required</sup> <a name="healthPeriodicAuditTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTime"></a>

```typescript
public readonly healthPeriodicAuditTime: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceTerminatePolicy`<sup>Required</sup> <a name="instanceTerminatePolicy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicy"></a>

```typescript
public readonly instanceTerminatePolicy: string;
```

- *Type:* string

---

##### `lbListenerId`<sup>Required</sup> <a name="lbListenerId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerId"></a>

```typescript
public readonly lbListenerId: string;
```

- *Type:* string

---

##### `maxInstanceNumber`<sup>Required</sup> <a name="maxInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumber"></a>

```typescript
public readonly maxInstanceNumber: number;
```

- *Type:* number

---

##### `minInstanceNumber`<sup>Required</sup> <a name="minInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumber"></a>

```typescript
public readonly minInstanceNumber: number;
```

- *Type:* number

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notifications"></a>

```typescript
public readonly notifications: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `scalingConfigurationId`<sup>Required</sup> <a name="scalingConfigurationId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationId"></a>

```typescript
public readonly scalingConfigurationId: string;
```

- *Type:* string

---

##### `scalingGroupName`<sup>Required</sup> <a name="scalingGroupName" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupName"></a>

```typescript
public readonly scalingGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AsGroupV1Config <a name="AsGroupV1Config" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.Initializer"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

const asGroupV1Config: asGroupV1.AsGroupV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deleteInstances">deleteInstances</a></code> | <code>string</code> | Whether to delete instances when they are removed from the AS group. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deletePublicip">deletePublicip</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#delete_publicip AsGroupV1#delete_publicip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.networks">networks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>[]</code> | networks block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingGroupName">scalingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#scaling_group_name AsGroupV1#scaling_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#vpc_id AsGroupV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.availableZones">availableZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#available_zones AsGroupV1#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.coolDownTime">coolDownTime</a></code> | <code>number</code> | The cooling duration, in seconds. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.desireInstanceNumber">desireInstanceNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#desire_instance_number AsGroupV1#desire_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditGracePeriod">healthPeriodicAuditGracePeriod</a></code> | <code>number</code> | The grace period for instance health check, in seconds. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditMethod">healthPeriodicAuditMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#health_periodic_audit_method AsGroupV1#health_periodic_audit_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditTime">healthPeriodicAuditTime</a></code> | <code>number</code> | The health check period for instances, in minutes. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#id AsGroupV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.instanceTerminatePolicy">instanceTerminatePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#instance_terminate_policy AsGroupV1#instance_terminate_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbaasListeners">lbaasListeners</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>[]</code> | lbaas_listeners block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbListenerId">lbListenerId</a></code> | <code>string</code> | The system supports the binding of up to six classic LB listeners, the IDs of which are separated using a comma. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.maxInstanceNumber">maxInstanceNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#max_instance_number AsGroupV1#max_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.minInstanceNumber">minInstanceNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#min_instance_number AsGroupV1#min_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.notifications">notifications</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#notifications AsGroupV1#notifications}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#region AsGroupV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingConfigurationId">scalingConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#scaling_configuration_id AsGroupV1#scaling_configuration_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.securityGroups">securityGroups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | security_groups block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#tags AsGroupV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deleteInstances`<sup>Required</sup> <a name="deleteInstances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deleteInstances"></a>

```typescript
public readonly deleteInstances: string;
```

- *Type:* string

Whether to delete instances when they are removed from the AS group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#delete_instances AsGroupV1#delete_instances}

---

##### `deletePublicip`<sup>Required</sup> <a name="deletePublicip" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deletePublicip"></a>

```typescript
public readonly deletePublicip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#delete_publicip AsGroupV1#delete_publicip}.

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.networks"></a>

```typescript
public readonly networks: IResolvable | AsGroupV1Networks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>[]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#networks AsGroupV1#networks}

---

##### `scalingGroupName`<sup>Required</sup> <a name="scalingGroupName" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingGroupName"></a>

```typescript
public readonly scalingGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#scaling_group_name AsGroupV1#scaling_group_name}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#vpc_id AsGroupV1#vpc_id}.

---

##### `availableZones`<sup>Optional</sup> <a name="availableZones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.availableZones"></a>

```typescript
public readonly availableZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#available_zones AsGroupV1#available_zones}.

---

##### `coolDownTime`<sup>Optional</sup> <a name="coolDownTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.coolDownTime"></a>

```typescript
public readonly coolDownTime: number;
```

- *Type:* number

The cooling duration, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#cool_down_time AsGroupV1#cool_down_time}

---

##### `desireInstanceNumber`<sup>Optional</sup> <a name="desireInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.desireInstanceNumber"></a>

```typescript
public readonly desireInstanceNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#desire_instance_number AsGroupV1#desire_instance_number}.

---

##### `healthPeriodicAuditGracePeriod`<sup>Optional</sup> <a name="healthPeriodicAuditGracePeriod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditGracePeriod"></a>

```typescript
public readonly healthPeriodicAuditGracePeriod: number;
```

- *Type:* number

The grace period for instance health check, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#health_periodic_audit_grace_period AsGroupV1#health_periodic_audit_grace_period}

---

##### `healthPeriodicAuditMethod`<sup>Optional</sup> <a name="healthPeriodicAuditMethod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditMethod"></a>

```typescript
public readonly healthPeriodicAuditMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#health_periodic_audit_method AsGroupV1#health_periodic_audit_method}.

---

##### `healthPeriodicAuditTime`<sup>Optional</sup> <a name="healthPeriodicAuditTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditTime"></a>

```typescript
public readonly healthPeriodicAuditTime: number;
```

- *Type:* number

The health check period for instances, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#health_periodic_audit_time AsGroupV1#health_periodic_audit_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceTerminatePolicy`<sup>Optional</sup> <a name="instanceTerminatePolicy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.instanceTerminatePolicy"></a>

```typescript
public readonly instanceTerminatePolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#instance_terminate_policy AsGroupV1#instance_terminate_policy}.

---

##### `lbaasListeners`<sup>Optional</sup> <a name="lbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbaasListeners"></a>

```typescript
public readonly lbaasListeners: IResolvable | AsGroupV1LbaasListeners[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>[]

lbaas_listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#lbaas_listeners AsGroupV1#lbaas_listeners}

---

##### `lbListenerId`<sup>Optional</sup> <a name="lbListenerId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbListenerId"></a>

```typescript
public readonly lbListenerId: string;
```

- *Type:* string

The system supports the binding of up to six classic LB listeners, the IDs of which are separated using a comma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#lb_listener_id AsGroupV1#lb_listener_id}

---

##### `maxInstanceNumber`<sup>Optional</sup> <a name="maxInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.maxInstanceNumber"></a>

```typescript
public readonly maxInstanceNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#max_instance_number AsGroupV1#max_instance_number}.

---

##### `minInstanceNumber`<sup>Optional</sup> <a name="minInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.minInstanceNumber"></a>

```typescript
public readonly minInstanceNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#min_instance_number AsGroupV1#min_instance_number}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.notifications"></a>

```typescript
public readonly notifications: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#notifications AsGroupV1#notifications}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#region AsGroupV1#region}.

---

##### `scalingConfigurationId`<sup>Optional</sup> <a name="scalingConfigurationId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingConfigurationId"></a>

```typescript
public readonly scalingConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#scaling_configuration_id AsGroupV1#scaling_configuration_id}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.securityGroups"></a>

```typescript
public readonly securityGroups: AsGroupV1SecurityGroups;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

security_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#security_groups AsGroupV1#security_groups}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#tags AsGroupV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: AsGroupV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#timeouts AsGroupV1#timeouts}

---

### AsGroupV1LbaasListeners <a name="AsGroupV1LbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.Initializer"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

const asGroupV1LbaasListeners: asGroupV1.AsGroupV1LbaasListeners = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.poolId">poolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#pool_id AsGroupV1#pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.protocolPort">protocolPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#protocol_port AsGroupV1#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#weight AsGroupV1#weight}. |

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#pool_id AsGroupV1#pool_id}.

---

##### `protocolPort`<sup>Required</sup> <a name="protocolPort" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.protocolPort"></a>

```typescript
public readonly protocolPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#protocol_port AsGroupV1#protocol_port}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#weight AsGroupV1#weight}.

---

### AsGroupV1Networks <a name="AsGroupV1Networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks.Initializer"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

const asGroupV1Networks: asGroupV1.AsGroupV1Networks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#id AsGroupV1#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AsGroupV1SecurityGroups <a name="AsGroupV1SecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups.Initializer"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

const asGroupV1SecurityGroups: asGroupV1.AsGroupV1SecurityGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#id AsGroupV1#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AsGroupV1Timeouts <a name="AsGroupV1Timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.Initializer"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

const asGroupV1Timeouts: asGroupV1.AsGroupV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#create AsGroupV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#delete AsGroupV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#create AsGroupV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/as_group_v1#delete AsGroupV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsGroupV1LbaasListenersList <a name="AsGroupV1LbaasListenersList" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

new asGroupV1.AsGroupV1LbaasListenersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.get"></a>

```typescript
public get(index: number): AsGroupV1LbaasListenersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AsGroupV1LbaasListeners[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>[]

---


### AsGroupV1LbaasListenersOutputReference <a name="AsGroupV1LbaasListenersOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

new asGroupV1.AsGroupV1LbaasListenersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolIdInput">poolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPortInput">protocolPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolId">poolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPort">protocolPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `poolIdInput`<sup>Optional</sup> <a name="poolIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolIdInput"></a>

```typescript
public readonly poolIdInput: string;
```

- *Type:* string

---

##### `protocolPortInput`<sup>Optional</sup> <a name="protocolPortInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPortInput"></a>

```typescript
public readonly protocolPortInput: number;
```

- *Type:* number

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

---

##### `protocolPort`<sup>Required</sup> <a name="protocolPort" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPort"></a>

```typescript
public readonly protocolPort: number;
```

- *Type:* number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AsGroupV1LbaasListeners;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>

---


### AsGroupV1NetworksList <a name="AsGroupV1NetworksList" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

new asGroupV1.AsGroupV1NetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.get"></a>

```typescript
public get(index: number): AsGroupV1NetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AsGroupV1Networks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>[]

---


### AsGroupV1NetworksOutputReference <a name="AsGroupV1NetworksOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

new asGroupV1.AsGroupV1NetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AsGroupV1Networks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>

---


### AsGroupV1SecurityGroupsOutputReference <a name="AsGroupV1SecurityGroupsOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

new asGroupV1.AsGroupV1SecurityGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AsGroupV1SecurityGroups;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

---


### AsGroupV1TimeoutsOutputReference <a name="AsGroupV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { asGroupV1 } from '@cdktf/provider-opentelekomcloud'

new asGroupV1.AsGroupV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AsGroupV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>

---



