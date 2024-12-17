# `ecsInstanceV1` Submodule <a name="`ecsInstanceV1` Submodule" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsInstanceV1 <a name="EcsInstanceV1" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1 opentelekomcloud_ecs_instance_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

new ecsInstanceV1.EcsInstanceV1(scope: Construct, id: string, config: EcsInstanceV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config">EcsInstanceV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config">EcsInstanceV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putDataDisks">putDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putNics">putNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putOsSchedulerHints">putOsSchedulerHints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetAutoRecovery">resetAutoRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetDataDisks">resetDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetDeleteDisksOnTermination">resetDeleteDisksOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetOsSchedulerHints">resetOsSchedulerHints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSystemDiskKmsId">resetSystemDiskKmsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSystemDiskSize">resetSystemDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSystemDiskType">resetSystemDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataDisks` <a name="putDataDisks" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putDataDisks"></a>

```typescript
public putDataDisks(value: IResolvable | EcsInstanceV1DataDisks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putDataDisks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>[]

---

##### `putNics` <a name="putNics" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putNics"></a>

```typescript
public putNics(value: IResolvable | EcsInstanceV1Nics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putNics.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>[]

---

##### `putOsSchedulerHints` <a name="putOsSchedulerHints" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putOsSchedulerHints"></a>

```typescript
public putOsSchedulerHints(value: IResolvable | EcsInstanceV1OsSchedulerHints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putOsSchedulerHints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints">EcsInstanceV1OsSchedulerHints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putTimeouts"></a>

```typescript
public putTimeouts(value: EcsInstanceV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a>

---

##### `resetAutoRecovery` <a name="resetAutoRecovery" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetAutoRecovery"></a>

```typescript
public resetAutoRecovery(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetDataDisks` <a name="resetDataDisks" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetDataDisks"></a>

```typescript
public resetDataDisks(): void
```

##### `resetDeleteDisksOnTermination` <a name="resetDeleteDisksOnTermination" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetDeleteDisksOnTermination"></a>

```typescript
public resetDeleteDisksOnTermination(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetOsSchedulerHints` <a name="resetOsSchedulerHints" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetOsSchedulerHints"></a>

```typescript
public resetOsSchedulerHints(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSystemDiskKmsId` <a name="resetSystemDiskKmsId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSystemDiskKmsId"></a>

```typescript
public resetSystemDiskKmsId(): void
```

##### `resetSystemDiskSize` <a name="resetSystemDiskSize" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSystemDiskSize"></a>

```typescript
public resetSystemDiskSize(): void
```

##### `resetSystemDiskType` <a name="resetSystemDiskType" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSystemDiskType"></a>

```typescript
public resetSystemDiskType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetUserData"></a>

```typescript
public resetUserData(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EcsInstanceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isConstruct"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

ecsInstanceV1.EcsInstanceV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isTerraformElement"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

ecsInstanceV1.EcsInstanceV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isTerraformResource"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

ecsInstanceV1.EcsInstanceV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.generateConfigForImport"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

ecsInstanceV1.EcsInstanceV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EcsInstanceV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcsInstanceV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcsInstanceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EcsInstanceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.dataDisks">dataDisks</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList">EcsInstanceV1DataDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.nics">nics</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList">EcsInstanceV1NicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.osSchedulerHints">osSchedulerHints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList">EcsInstanceV1OsSchedulerHintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskId">systemDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference">EcsInstanceV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.volumesAttached">volumesAttached</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList">EcsInstanceV1VolumesAttachedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.autoRecoveryInput">autoRecoveryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.dataDisksInput">dataDisksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.deleteDisksOnTerminationInput">deleteDisksOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.flavorInput">flavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.nicsInput">nicsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.osSchedulerHintsInput">osSchedulerHintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints">EcsInstanceV1OsSchedulerHints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskKmsIdInput">systemDiskKmsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskSizeInput">systemDiskSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskTypeInput">systemDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.autoRecovery">autoRecovery</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.deleteDisksOnTermination">deleteDisksOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.flavor">flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskKmsId">systemDiskKmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskSize">systemDiskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskType">systemDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataDisks`<sup>Required</sup> <a name="dataDisks" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.dataDisks"></a>

```typescript
public readonly dataDisks: EcsInstanceV1DataDisksList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList">EcsInstanceV1DataDisksList</a>

---

##### `nics`<sup>Required</sup> <a name="nics" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.nics"></a>

```typescript
public readonly nics: EcsInstanceV1NicsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList">EcsInstanceV1NicsList</a>

---

##### `osSchedulerHints`<sup>Required</sup> <a name="osSchedulerHints" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.osSchedulerHints"></a>

```typescript
public readonly osSchedulerHints: EcsInstanceV1OsSchedulerHintsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList">EcsInstanceV1OsSchedulerHintsList</a>

---

##### `systemDiskId`<sup>Required</sup> <a name="systemDiskId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskId"></a>

```typescript
public readonly systemDiskId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.timeouts"></a>

```typescript
public readonly timeouts: EcsInstanceV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference">EcsInstanceV1TimeoutsOutputReference</a>

---

##### `volumesAttached`<sup>Required</sup> <a name="volumesAttached" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.volumesAttached"></a>

```typescript
public readonly volumesAttached: EcsInstanceV1VolumesAttachedList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList">EcsInstanceV1VolumesAttachedList</a>

---

##### `autoRecoveryInput`<sup>Optional</sup> <a name="autoRecoveryInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.autoRecoveryInput"></a>

```typescript
public readonly autoRecoveryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `dataDisksInput`<sup>Optional</sup> <a name="dataDisksInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.dataDisksInput"></a>

```typescript
public readonly dataDisksInput: IResolvable | EcsInstanceV1DataDisks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>[]

---

##### `deleteDisksOnTerminationInput`<sup>Optional</sup> <a name="deleteDisksOnTerminationInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.deleteDisksOnTerminationInput"></a>

```typescript
public readonly deleteDisksOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.flavorInput"></a>

```typescript
public readonly flavorInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nicsInput`<sup>Optional</sup> <a name="nicsInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.nicsInput"></a>

```typescript
public readonly nicsInput: IResolvable | EcsInstanceV1Nics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>[]

---

##### `osSchedulerHintsInput`<sup>Optional</sup> <a name="osSchedulerHintsInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.osSchedulerHintsInput"></a>

```typescript
public readonly osSchedulerHintsInput: IResolvable | EcsInstanceV1OsSchedulerHints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints">EcsInstanceV1OsSchedulerHints</a>[]

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `systemDiskKmsIdInput`<sup>Optional</sup> <a name="systemDiskKmsIdInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskKmsIdInput"></a>

```typescript
public readonly systemDiskKmsIdInput: string;
```

- *Type:* string

---

##### `systemDiskSizeInput`<sup>Optional</sup> <a name="systemDiskSizeInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskSizeInput"></a>

```typescript
public readonly systemDiskSizeInput: number;
```

- *Type:* number

---

##### `systemDiskTypeInput`<sup>Optional</sup> <a name="systemDiskTypeInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskTypeInput"></a>

```typescript
public readonly systemDiskTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EcsInstanceV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a>

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `autoRecovery`<sup>Required</sup> <a name="autoRecovery" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.autoRecovery"></a>

```typescript
public readonly autoRecovery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `deleteDisksOnTermination`<sup>Required</sup> <a name="deleteDisksOnTermination" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.deleteDisksOnTermination"></a>

```typescript
public readonly deleteDisksOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `systemDiskKmsId`<sup>Required</sup> <a name="systemDiskKmsId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskKmsId"></a>

```typescript
public readonly systemDiskKmsId: string;
```

- *Type:* string

---

##### `systemDiskSize`<sup>Required</sup> <a name="systemDiskSize" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskSize"></a>

```typescript
public readonly systemDiskSize: number;
```

- *Type:* number

---

##### `systemDiskType`<sup>Required</sup> <a name="systemDiskType" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskType"></a>

```typescript
public readonly systemDiskType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsInstanceV1Config <a name="EcsInstanceV1Config" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

const ecsInstanceV1Config: ecsInstanceV1.EcsInstanceV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.flavor">flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#flavor EcsInstanceV1#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#image_id EcsInstanceV1#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#name EcsInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.nics">nics</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>[]</code> | nics block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#vpc_id EcsInstanceV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.autoRecovery">autoRecovery</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#auto_recovery EcsInstanceV1#auto_recovery}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#availability_zone EcsInstanceV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.dataDisks">dataDisks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>[]</code> | data_disks block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.deleteDisksOnTermination">deleteDisksOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#delete_disks_on_termination EcsInstanceV1#delete_disks_on_termination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#id EcsInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#key_name EcsInstanceV1#key_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.osSchedulerHints">osSchedulerHints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints">EcsInstanceV1OsSchedulerHints</a>[]</code> | os_scheduler_hints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#password EcsInstanceV1#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#security_groups EcsInstanceV1#security_groups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.systemDiskKmsId">systemDiskKmsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#system_disk_kms_id EcsInstanceV1#system_disk_kms_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.systemDiskSize">systemDiskSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#system_disk_size EcsInstanceV1#system_disk_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.systemDiskType">systemDiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#system_disk_type EcsInstanceV1#system_disk_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#tags EcsInstanceV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#user_data EcsInstanceV1#user_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#flavor EcsInstanceV1#flavor}.

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#image_id EcsInstanceV1#image_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#name EcsInstanceV1#name}.

---

##### `nics`<sup>Required</sup> <a name="nics" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.nics"></a>

```typescript
public readonly nics: IResolvable | EcsInstanceV1Nics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>[]

nics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#nics EcsInstanceV1#nics}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#vpc_id EcsInstanceV1#vpc_id}.

---

##### `autoRecovery`<sup>Optional</sup> <a name="autoRecovery" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.autoRecovery"></a>

```typescript
public readonly autoRecovery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#auto_recovery EcsInstanceV1#auto_recovery}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#availability_zone EcsInstanceV1#availability_zone}.

---

##### `dataDisks`<sup>Optional</sup> <a name="dataDisks" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.dataDisks"></a>

```typescript
public readonly dataDisks: IResolvable | EcsInstanceV1DataDisks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>[]

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#data_disks EcsInstanceV1#data_disks}

---

##### `deleteDisksOnTermination`<sup>Optional</sup> <a name="deleteDisksOnTermination" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.deleteDisksOnTermination"></a>

```typescript
public readonly deleteDisksOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#delete_disks_on_termination EcsInstanceV1#delete_disks_on_termination}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#id EcsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#key_name EcsInstanceV1#key_name}.

---

##### `osSchedulerHints`<sup>Optional</sup> <a name="osSchedulerHints" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.osSchedulerHints"></a>

```typescript
public readonly osSchedulerHints: IResolvable | EcsInstanceV1OsSchedulerHints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints">EcsInstanceV1OsSchedulerHints</a>[]

os_scheduler_hints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#os_scheduler_hints EcsInstanceV1#os_scheduler_hints}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#password EcsInstanceV1#password}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#security_groups EcsInstanceV1#security_groups}.

---

##### `systemDiskKmsId`<sup>Optional</sup> <a name="systemDiskKmsId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.systemDiskKmsId"></a>

```typescript
public readonly systemDiskKmsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#system_disk_kms_id EcsInstanceV1#system_disk_kms_id}.

---

##### `systemDiskSize`<sup>Optional</sup> <a name="systemDiskSize" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.systemDiskSize"></a>

```typescript
public readonly systemDiskSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#system_disk_size EcsInstanceV1#system_disk_size}.

---

##### `systemDiskType`<sup>Optional</sup> <a name="systemDiskType" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.systemDiskType"></a>

```typescript
public readonly systemDiskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#system_disk_type EcsInstanceV1#system_disk_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#tags EcsInstanceV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: EcsInstanceV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#timeouts EcsInstanceV1#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#user_data EcsInstanceV1#user_data}.

---

### EcsInstanceV1DataDisks <a name="EcsInstanceV1DataDisks" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

const ecsInstanceV1DataDisks: ecsInstanceV1.EcsInstanceV1DataDisks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#size EcsInstanceV1#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#type EcsInstanceV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.kmsId">kmsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#kms_id EcsInstanceV1#kms_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#snapshot_id EcsInstanceV1#snapshot_id}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#size EcsInstanceV1#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#type EcsInstanceV1#type}.

---

##### `kmsId`<sup>Optional</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#kms_id EcsInstanceV1#kms_id}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#snapshot_id EcsInstanceV1#snapshot_id}.

---

### EcsInstanceV1Nics <a name="EcsInstanceV1Nics" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

const ecsInstanceV1Nics: ecsInstanceV1.EcsInstanceV1Nics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics.property.networkId">networkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#network_id EcsInstanceV1#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#ip_address EcsInstanceV1#ip_address}. |

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#network_id EcsInstanceV1#network_id}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#ip_address EcsInstanceV1#ip_address}.

---

### EcsInstanceV1OsSchedulerHints <a name="EcsInstanceV1OsSchedulerHints" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

const ecsInstanceV1OsSchedulerHints: ecsInstanceV1.EcsInstanceV1OsSchedulerHints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints.property.dedicatedHostId">dedicatedHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#dedicated_host_id EcsInstanceV1#dedicated_host_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints.property.group">group</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#group EcsInstanceV1#group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints.property.tenancy">tenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#tenancy EcsInstanceV1#tenancy}. |

---

##### `dedicatedHostId`<sup>Optional</sup> <a name="dedicatedHostId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints.property.dedicatedHostId"></a>

```typescript
public readonly dedicatedHostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#dedicated_host_id EcsInstanceV1#dedicated_host_id}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#group EcsInstanceV1#group}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#tenancy EcsInstanceV1#tenancy}.

---

### EcsInstanceV1Timeouts <a name="EcsInstanceV1Timeouts" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

const ecsInstanceV1Timeouts: ecsInstanceV1.EcsInstanceV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#create EcsInstanceV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#delete EcsInstanceV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#update EcsInstanceV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#create EcsInstanceV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#delete EcsInstanceV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/ecs_instance_v1#update EcsInstanceV1#update}.

---

### EcsInstanceV1VolumesAttached <a name="EcsInstanceV1VolumesAttached" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttached"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttached.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

const ecsInstanceV1VolumesAttached: ecsInstanceV1.EcsInstanceV1VolumesAttached = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### EcsInstanceV1DataDisksList <a name="EcsInstanceV1DataDisksList" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

new ecsInstanceV1.EcsInstanceV1DataDisksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.get"></a>

```typescript
public get(index: number): EcsInstanceV1DataDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsInstanceV1DataDisks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>[]

---


### EcsInstanceV1DataDisksOutputReference <a name="EcsInstanceV1DataDisksOutputReference" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

new ecsInstanceV1.EcsInstanceV1DataDisksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.resetKmsId">resetKmsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsId` <a name="resetKmsId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.resetKmsId"></a>

```typescript
public resetKmsId(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.kmsIdInput">kmsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.kmsId">kmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsIdInput`<sup>Optional</sup> <a name="kmsIdInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.kmsIdInput"></a>

```typescript
public readonly kmsIdInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsInstanceV1DataDisks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>

---


### EcsInstanceV1NicsList <a name="EcsInstanceV1NicsList" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

new ecsInstanceV1.EcsInstanceV1NicsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.get"></a>

```typescript
public get(index: number): EcsInstanceV1NicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsInstanceV1Nics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>[]

---


### EcsInstanceV1NicsOutputReference <a name="EcsInstanceV1NicsOutputReference" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

new ecsInstanceV1.EcsInstanceV1NicsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.macAddress">macAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.portId">portId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.networkIdInput">networkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

---

##### `portId`<sup>Required</sup> <a name="portId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.portId"></a>

```typescript
public readonly portId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.networkIdInput"></a>

```typescript
public readonly networkIdInput: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsInstanceV1Nics;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>

---


### EcsInstanceV1OsSchedulerHintsList <a name="EcsInstanceV1OsSchedulerHintsList" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

new ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.get"></a>

```typescript
public get(index: number): EcsInstanceV1OsSchedulerHintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints">EcsInstanceV1OsSchedulerHints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsInstanceV1OsSchedulerHints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints">EcsInstanceV1OsSchedulerHints</a>[]

---


### EcsInstanceV1OsSchedulerHintsOutputReference <a name="EcsInstanceV1OsSchedulerHintsOutputReference" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

new ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.resetDedicatedHostId">resetDedicatedHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.resetTenancy">resetTenancy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDedicatedHostId` <a name="resetDedicatedHostId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.resetDedicatedHostId"></a>

```typescript
public resetDedicatedHostId(): void
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetTenancy` <a name="resetTenancy" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.resetTenancy"></a>

```typescript
public resetTenancy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.dedicatedHostIdInput">dedicatedHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.tenancyInput">tenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.dedicatedHostId">dedicatedHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints">EcsInstanceV1OsSchedulerHints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dedicatedHostIdInput`<sup>Optional</sup> <a name="dedicatedHostIdInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.dedicatedHostIdInput"></a>

```typescript
public readonly dedicatedHostIdInput: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.tenancyInput"></a>

```typescript
public readonly tenancyInput: string;
```

- *Type:* string

---

##### `dedicatedHostId`<sup>Required</sup> <a name="dedicatedHostId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.dedicatedHostId"></a>

```typescript
public readonly dedicatedHostId: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsInstanceV1OsSchedulerHints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1OsSchedulerHints">EcsInstanceV1OsSchedulerHints</a>

---


### EcsInstanceV1TimeoutsOutputReference <a name="EcsInstanceV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

new ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsInstanceV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a>

---


### EcsInstanceV1VolumesAttachedList <a name="EcsInstanceV1VolumesAttachedList" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

new ecsInstanceV1.EcsInstanceV1VolumesAttachedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.get"></a>

```typescript
public get(index: number): EcsInstanceV1VolumesAttachedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EcsInstanceV1VolumesAttachedOutputReference <a name="EcsInstanceV1VolumesAttachedOutputReference" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer"></a>

```typescript
import { ecsInstanceV1 } from '@cdktf/provider-opentelekomcloud'

new ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.kmsId">kmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttached">EcsInstanceV1VolumesAttached</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcsInstanceV1VolumesAttached;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttached">EcsInstanceV1VolumesAttached</a>

---



