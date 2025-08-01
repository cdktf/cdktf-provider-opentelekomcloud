# `rdsInstanceV3` Submodule <a name="`rdsInstanceV3` Submodule" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsInstanceV3 <a name="RdsInstanceV3" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3 opentelekomcloud_rds_instance_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new rdsInstanceV3.RdsInstanceV3(scope: Construct, id: string, config: RdsInstanceV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config">RdsInstanceV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config">RdsInstanceV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putBackupStrategy">putBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putDb">putDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestoreFromBackup">putRestoreFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestorePoint">putRestorePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetBackupStrategy">resetBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetHaReplicationMode">resetHaReplicationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetLowerCaseTableNames">resetLowerCaseTableNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetParamGroupId">resetParamGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetPublicIps">resetPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetRestoreFromBackup">resetRestoreFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetRestorePoint">resetRestorePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetSslEnable">resetSslEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupStrategy` <a name="putBackupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putBackupStrategy"></a>

```typescript
public putBackupStrategy(value: RdsInstanceV3BackupStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putBackupStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a>

---

##### `putDb` <a name="putDb" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putDb"></a>

```typescript
public putDb(value: RdsInstanceV3Db): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a>

---

##### `putRestoreFromBackup` <a name="putRestoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestoreFromBackup"></a>

```typescript
public putRestoreFromBackup(value: RdsInstanceV3RestoreFromBackup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestoreFromBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a>

---

##### `putRestorePoint` <a name="putRestorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestorePoint"></a>

```typescript
public putRestorePoint(value: RdsInstanceV3RestorePoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestorePoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putTimeouts"></a>

```typescript
public putTimeouts(value: RdsInstanceV3Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a>

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putVolume"></a>

```typescript
public putVolume(value: RdsInstanceV3Volume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a>

---

##### `resetBackupStrategy` <a name="resetBackupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetBackupStrategy"></a>

```typescript
public resetBackupStrategy(): void
```

##### `resetHaReplicationMode` <a name="resetHaReplicationMode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetHaReplicationMode"></a>

```typescript
public resetHaReplicationMode(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLowerCaseTableNames` <a name="resetLowerCaseTableNames" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetLowerCaseTableNames"></a>

```typescript
public resetLowerCaseTableNames(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetParamGroupId` <a name="resetParamGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetParamGroupId"></a>

```typescript
public resetParamGroupId(): void
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetPrivateIp"></a>

```typescript
public resetPrivateIp(): void
```

##### `resetPublicIps` <a name="resetPublicIps" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetPublicIps"></a>

```typescript
public resetPublicIps(): void
```

##### `resetRestoreFromBackup` <a name="resetRestoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetRestoreFromBackup"></a>

```typescript
public resetRestoreFromBackup(): void
```

##### `resetRestorePoint` <a name="resetRestorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetRestorePoint"></a>

```typescript
public resetRestorePoint(): void
```

##### `resetSslEnable` <a name="resetSslEnable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetSslEnable"></a>

```typescript
public resetSslEnable(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RdsInstanceV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isConstruct"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

rdsInstanceV3.RdsInstanceV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformElement"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

rdsInstanceV3.RdsInstanceV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformResource"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

rdsInstanceV3.RdsInstanceV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

rdsInstanceV3.RdsInstanceV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RdsInstanceV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsInstanceV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsInstanceV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RdsInstanceV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.autoscalingEnabled">autoscalingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.backupStrategy">backupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference">RdsInstanceV3BackupStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.db">db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference">RdsInstanceV3DbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList">RdsInstanceV3NodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.privateIps">privateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoredBackupId">restoredBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoreFromBackup">restoreFromBackup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference">RdsInstanceV3RestoreFromBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restorePoint">restorePoint</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference">RdsInstanceV3RestorePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference">RdsInstanceV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference">RdsInstanceV3VolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.backupStrategyInput">backupStrategyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.dbInput">dbInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.flavorInput">flavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.haReplicationModeInput">haReplicationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lowerCaseTableNamesInput">lowerCaseTableNamesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.paramGroupIdInput">paramGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.privateIpInput">privateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.publicIpsInput">publicIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoreFromBackupInput">restoreFromBackupInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restorePointInput">restorePointInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.sslEnableInput">sslEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tagInput">tagInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.volumeInput">volumeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZone">availabilityZone</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.flavor">flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.haReplicationMode">haReplicationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lowerCaseTableNames">lowerCaseTableNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.paramGroupId">paramGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.publicIps">publicIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.sslEnable">sslEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tag">tag</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscalingEnabled`<sup>Required</sup> <a name="autoscalingEnabled" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.autoscalingEnabled"></a>

```typescript
public readonly autoscalingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `backupStrategy`<sup>Required</sup> <a name="backupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.backupStrategy"></a>

```typescript
public readonly backupStrategy: RdsInstanceV3BackupStrategyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference">RdsInstanceV3BackupStrategyOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.db"></a>

```typescript
public readonly db: RdsInstanceV3DbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference">RdsInstanceV3DbOutputReference</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.nodes"></a>

```typescript
public readonly nodes: RdsInstanceV3NodesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList">RdsInstanceV3NodesList</a>

---

##### `privateIps`<sup>Required</sup> <a name="privateIps" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.privateIps"></a>

```typescript
public readonly privateIps: string[];
```

- *Type:* string[]

---

##### `restoredBackupId`<sup>Required</sup> <a name="restoredBackupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoredBackupId"></a>

```typescript
public readonly restoredBackupId: string;
```

- *Type:* string

---

##### `restoreFromBackup`<sup>Required</sup> <a name="restoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoreFromBackup"></a>

```typescript
public readonly restoreFromBackup: RdsInstanceV3RestoreFromBackupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference">RdsInstanceV3RestoreFromBackupOutputReference</a>

---

##### `restorePoint`<sup>Required</sup> <a name="restorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restorePoint"></a>

```typescript
public readonly restorePoint: RdsInstanceV3RestorePointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference">RdsInstanceV3RestorePointOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.timeouts"></a>

```typescript
public readonly timeouts: RdsInstanceV3TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference">RdsInstanceV3TimeoutsOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.volume"></a>

```typescript
public readonly volume: RdsInstanceV3VolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference">RdsInstanceV3VolumeOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string[];
```

- *Type:* string[]

---

##### `backupStrategyInput`<sup>Optional</sup> <a name="backupStrategyInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.backupStrategyInput"></a>

```typescript
public readonly backupStrategyInput: RdsInstanceV3BackupStrategy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a>

---

##### `dbInput`<sup>Optional</sup> <a name="dbInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.dbInput"></a>

```typescript
public readonly dbInput: RdsInstanceV3Db;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a>

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.flavorInput"></a>

```typescript
public readonly flavorInput: string;
```

- *Type:* string

---

##### `haReplicationModeInput`<sup>Optional</sup> <a name="haReplicationModeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.haReplicationModeInput"></a>

```typescript
public readonly haReplicationModeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lowerCaseTableNamesInput`<sup>Optional</sup> <a name="lowerCaseTableNamesInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lowerCaseTableNamesInput"></a>

```typescript
public readonly lowerCaseTableNamesInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `paramGroupIdInput`<sup>Optional</sup> <a name="paramGroupIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.paramGroupIdInput"></a>

```typescript
public readonly paramGroupIdInput: string;
```

- *Type:* string

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.privateIpInput"></a>

```typescript
public readonly privateIpInput: string;
```

- *Type:* string

---

##### `publicIpsInput`<sup>Optional</sup> <a name="publicIpsInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.publicIpsInput"></a>

```typescript
public readonly publicIpsInput: string[];
```

- *Type:* string[]

---

##### `restoreFromBackupInput`<sup>Optional</sup> <a name="restoreFromBackupInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoreFromBackupInput"></a>

```typescript
public readonly restoreFromBackupInput: RdsInstanceV3RestoreFromBackup;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a>

---

##### `restorePointInput`<sup>Optional</sup> <a name="restorePointInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restorePointInput"></a>

```typescript
public readonly restorePointInput: RdsInstanceV3RestorePoint;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a>

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `sslEnableInput`<sup>Optional</sup> <a name="sslEnableInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.sslEnableInput"></a>

```typescript
public readonly sslEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tagInput"></a>

```typescript
public readonly tagInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RdsInstanceV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a>

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.volumeInput"></a>

```typescript
public readonly volumeInput: RdsInstanceV3Volume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string[];
```

- *Type:* string[]

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

---

##### `haReplicationMode`<sup>Required</sup> <a name="haReplicationMode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.haReplicationMode"></a>

```typescript
public readonly haReplicationMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lowerCaseTableNames`<sup>Required</sup> <a name="lowerCaseTableNames" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lowerCaseTableNames"></a>

```typescript
public readonly lowerCaseTableNames: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `paramGroupId`<sup>Required</sup> <a name="paramGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.paramGroupId"></a>

```typescript
public readonly paramGroupId: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `publicIps`<sup>Required</sup> <a name="publicIps" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.publicIps"></a>

```typescript
public readonly publicIps: string[];
```

- *Type:* string[]

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `sslEnable`<sup>Required</sup> <a name="sslEnable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.sslEnable"></a>

```typescript
public readonly sslEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tag"></a>

```typescript
public readonly tag: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsInstanceV3BackupStrategy <a name="RdsInstanceV3BackupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const rdsInstanceV3BackupStrategy: rdsInstanceV3.RdsInstanceV3BackupStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#start_time RdsInstanceV3#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.keepDays">keepDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#keep_days RdsInstanceV3#keep_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.period">period</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#period RdsInstanceV3#period}. |

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#start_time RdsInstanceV3#start_time}.

---

##### `keepDays`<sup>Optional</sup> <a name="keepDays" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.keepDays"></a>

```typescript
public readonly keepDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#keep_days RdsInstanceV3#keep_days}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#period RdsInstanceV3#period}.

---

### RdsInstanceV3Config <a name="RdsInstanceV3Config" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const rdsInstanceV3Config: rdsInstanceV3.RdsInstanceV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.availabilityZone">availabilityZone</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#availability_zone RdsInstanceV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.db">db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a></code> | db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.flavor">flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#flavor RdsInstanceV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#name RdsInstanceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#security_group_id RdsInstanceV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#subnet_id RdsInstanceV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#vpc_id RdsInstanceV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.backupStrategy">backupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a></code> | backup_strategy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.haReplicationMode">haReplicationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#ha_replication_mode RdsInstanceV3#ha_replication_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#id RdsInstanceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.lowerCaseTableNames">lowerCaseTableNames</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#lower_case_table_names RdsInstanceV3#lower_case_table_names}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#parameters RdsInstanceV3#parameters}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.paramGroupId">paramGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#param_group_id RdsInstanceV3#param_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.privateIp">privateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#private_ip RdsInstanceV3#private_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.publicIps">publicIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#public_ips RdsInstanceV3#public_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.restoreFromBackup">restoreFromBackup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a></code> | restore_from_backup block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.restorePoint">restorePoint</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a></code> | restore_point block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.sslEnable">sslEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#ssl_enable RdsInstanceV3#ssl_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.tag">tag</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#tag RdsInstanceV3#tag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#tags RdsInstanceV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#availability_zone RdsInstanceV3#availability_zone}.

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.db"></a>

```typescript
public readonly db: RdsInstanceV3Db;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a>

db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#db RdsInstanceV3#db}

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#flavor RdsInstanceV3#flavor}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#name RdsInstanceV3#name}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#security_group_id RdsInstanceV3#security_group_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#subnet_id RdsInstanceV3#subnet_id}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.volume"></a>

```typescript
public readonly volume: RdsInstanceV3Volume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#volume RdsInstanceV3#volume}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#vpc_id RdsInstanceV3#vpc_id}.

---

##### `backupStrategy`<sup>Optional</sup> <a name="backupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.backupStrategy"></a>

```typescript
public readonly backupStrategy: RdsInstanceV3BackupStrategy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a>

backup_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#backup_strategy RdsInstanceV3#backup_strategy}

---

##### `haReplicationMode`<sup>Optional</sup> <a name="haReplicationMode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.haReplicationMode"></a>

```typescript
public readonly haReplicationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#ha_replication_mode RdsInstanceV3#ha_replication_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#id RdsInstanceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lowerCaseTableNames`<sup>Optional</sup> <a name="lowerCaseTableNames" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.lowerCaseTableNames"></a>

```typescript
public readonly lowerCaseTableNames: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#lower_case_table_names RdsInstanceV3#lower_case_table_names}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#parameters RdsInstanceV3#parameters}.

---

##### `paramGroupId`<sup>Optional</sup> <a name="paramGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.paramGroupId"></a>

```typescript
public readonly paramGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#param_group_id RdsInstanceV3#param_group_id}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#private_ip RdsInstanceV3#private_ip}.

---

##### `publicIps`<sup>Optional</sup> <a name="publicIps" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.publicIps"></a>

```typescript
public readonly publicIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#public_ips RdsInstanceV3#public_ips}.

---

##### `restoreFromBackup`<sup>Optional</sup> <a name="restoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.restoreFromBackup"></a>

```typescript
public readonly restoreFromBackup: RdsInstanceV3RestoreFromBackup;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a>

restore_from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#restore_from_backup RdsInstanceV3#restore_from_backup}

---

##### `restorePoint`<sup>Optional</sup> <a name="restorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.restorePoint"></a>

```typescript
public readonly restorePoint: RdsInstanceV3RestorePoint;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a>

restore_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#restore_point RdsInstanceV3#restore_point}

---

##### `sslEnable`<sup>Optional</sup> <a name="sslEnable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.sslEnable"></a>

```typescript
public readonly sslEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#ssl_enable RdsInstanceV3#ssl_enable}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.tag"></a>

```typescript
public readonly tag: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#tag RdsInstanceV3#tag}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#tags RdsInstanceV3#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.timeouts"></a>

```typescript
public readonly timeouts: RdsInstanceV3Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#timeouts RdsInstanceV3#timeouts}

---

### RdsInstanceV3Db <a name="RdsInstanceV3Db" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const rdsInstanceV3Db: rdsInstanceV3.RdsInstanceV3Db = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#password RdsInstanceV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#port RdsInstanceV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#type RdsInstanceV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#version RdsInstanceV3#version}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#password RdsInstanceV3#password}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#port RdsInstanceV3#port}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#type RdsInstanceV3#type}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#version RdsInstanceV3#version}.

---

### RdsInstanceV3Nodes <a name="RdsInstanceV3Nodes" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Nodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Nodes.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const rdsInstanceV3Nodes: rdsInstanceV3.RdsInstanceV3Nodes = { ... }
```


### RdsInstanceV3RestoreFromBackup <a name="RdsInstanceV3RestoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const rdsInstanceV3RestoreFromBackup: rdsInstanceV3.RdsInstanceV3RestoreFromBackup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.sourceInstanceId">sourceInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#source_instance_id RdsInstanceV3#source_instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#type RdsInstanceV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.backupId">backupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#backup_id RdsInstanceV3#backup_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.restoreTime">restoreTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#restore_time RdsInstanceV3#restore_time}. |

---

##### `sourceInstanceId`<sup>Required</sup> <a name="sourceInstanceId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.sourceInstanceId"></a>

```typescript
public readonly sourceInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#source_instance_id RdsInstanceV3#source_instance_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#type RdsInstanceV3#type}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#backup_id RdsInstanceV3#backup_id}.

---

##### `restoreTime`<sup>Optional</sup> <a name="restoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.restoreTime"></a>

```typescript
public readonly restoreTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#restore_time RdsInstanceV3#restore_time}.

---

### RdsInstanceV3RestorePoint <a name="RdsInstanceV3RestorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const rdsInstanceV3RestorePoint: rdsInstanceV3.RdsInstanceV3RestorePoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#instance_id RdsInstanceV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.backupId">backupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#backup_id RdsInstanceV3#backup_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.restoreTime">restoreTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#restore_time RdsInstanceV3#restore_time}. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#instance_id RdsInstanceV3#instance_id}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#backup_id RdsInstanceV3#backup_id}.

---

##### `restoreTime`<sup>Optional</sup> <a name="restoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.restoreTime"></a>

```typescript
public readonly restoreTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#restore_time RdsInstanceV3#restore_time}.

---

### RdsInstanceV3Timeouts <a name="RdsInstanceV3Timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const rdsInstanceV3Timeouts: rdsInstanceV3.RdsInstanceV3Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#create RdsInstanceV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#update RdsInstanceV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#create RdsInstanceV3#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#update RdsInstanceV3#update}.

---

### RdsInstanceV3Volume <a name="RdsInstanceV3Volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const rdsInstanceV3Volume: rdsInstanceV3.RdsInstanceV3Volume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#size RdsInstanceV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#type RdsInstanceV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.diskEncryptionId">diskEncryptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#disk_encryption_id RdsInstanceV3#disk_encryption_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.limitSize">limitSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#limit_size RdsInstanceV3#limit_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.triggerThreshold">triggerThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#trigger_threshold RdsInstanceV3#trigger_threshold}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#size RdsInstanceV3#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#type RdsInstanceV3#type}.

---

##### `diskEncryptionId`<sup>Optional</sup> <a name="diskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.diskEncryptionId"></a>

```typescript
public readonly diskEncryptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#disk_encryption_id RdsInstanceV3#disk_encryption_id}.

---

##### `limitSize`<sup>Optional</sup> <a name="limitSize" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.limitSize"></a>

```typescript
public readonly limitSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#limit_size RdsInstanceV3#limit_size}.

---

##### `triggerThreshold`<sup>Optional</sup> <a name="triggerThreshold" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.triggerThreshold"></a>

```typescript
public readonly triggerThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#trigger_threshold RdsInstanceV3#trigger_threshold}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsInstanceV3BackupStrategyOutputReference <a name="RdsInstanceV3BackupStrategyOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resetKeepDays">resetKeepDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeepDays` <a name="resetKeepDays" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resetKeepDays"></a>

```typescript
public resetKeepDays(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.keepDaysInput">keepDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.keepDays">keepDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keepDaysInput`<sup>Optional</sup> <a name="keepDaysInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.keepDaysInput"></a>

```typescript
public readonly keepDaysInput: number;
```

- *Type:* number

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `keepDays`<sup>Required</sup> <a name="keepDays" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.keepDays"></a>

```typescript
public readonly keepDays: number;
```

- *Type:* number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsInstanceV3BackupStrategy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a>

---


### RdsInstanceV3DbOutputReference <a name="RdsInstanceV3DbOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new rdsInstanceV3.RdsInstanceV3DbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsInstanceV3Db;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a>

---


### RdsInstanceV3NodesList <a name="RdsInstanceV3NodesList" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new rdsInstanceV3.RdsInstanceV3NodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.get"></a>

```typescript
public get(index: number): RdsInstanceV3NodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### RdsInstanceV3NodesOutputReference <a name="RdsInstanceV3NodesOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new rdsInstanceV3.RdsInstanceV3NodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Nodes">RdsInstanceV3Nodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsInstanceV3Nodes;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Nodes">RdsInstanceV3Nodes</a>

---


### RdsInstanceV3RestoreFromBackupOutputReference <a name="RdsInstanceV3RestoreFromBackupOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resetRestoreTime">resetRestoreTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupId` <a name="resetBackupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resetBackupId"></a>

```typescript
public resetBackupId(): void
```

##### `resetRestoreTime` <a name="resetRestoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resetRestoreTime"></a>

```typescript
public resetRestoreTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.backupIdInput">backupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.restoreTimeInput">restoreTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.sourceInstanceIdInput">sourceInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.restoreTime">restoreTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.sourceInstanceId">sourceInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.backupIdInput"></a>

```typescript
public readonly backupIdInput: string;
```

- *Type:* string

---

##### `restoreTimeInput`<sup>Optional</sup> <a name="restoreTimeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.restoreTimeInput"></a>

```typescript
public readonly restoreTimeInput: number;
```

- *Type:* number

---

##### `sourceInstanceIdInput`<sup>Optional</sup> <a name="sourceInstanceIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.sourceInstanceIdInput"></a>

```typescript
public readonly sourceInstanceIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `restoreTime`<sup>Required</sup> <a name="restoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.restoreTime"></a>

```typescript
public readonly restoreTime: number;
```

- *Type:* number

---

##### `sourceInstanceId`<sup>Required</sup> <a name="sourceInstanceId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.sourceInstanceId"></a>

```typescript
public readonly sourceInstanceId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsInstanceV3RestoreFromBackup;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a>

---


### RdsInstanceV3RestorePointOutputReference <a name="RdsInstanceV3RestorePointOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new rdsInstanceV3.RdsInstanceV3RestorePointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resetRestoreTime">resetRestoreTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupId` <a name="resetBackupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resetBackupId"></a>

```typescript
public resetBackupId(): void
```

##### `resetRestoreTime` <a name="resetRestoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resetRestoreTime"></a>

```typescript
public resetRestoreTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.backupIdInput">backupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.restoreTimeInput">restoreTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.restoreTime">restoreTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.backupIdInput"></a>

```typescript
public readonly backupIdInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `restoreTimeInput`<sup>Optional</sup> <a name="restoreTimeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.restoreTimeInput"></a>

```typescript
public readonly restoreTimeInput: number;
```

- *Type:* number

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `restoreTime`<sup>Required</sup> <a name="restoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.restoreTime"></a>

```typescript
public readonly restoreTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsInstanceV3RestorePoint;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a>

---


### RdsInstanceV3TimeoutsOutputReference <a name="RdsInstanceV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsInstanceV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a>

---


### RdsInstanceV3VolumeOutputReference <a name="RdsInstanceV3VolumeOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.Initializer"></a>

```typescript
import { rdsInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new rdsInstanceV3.RdsInstanceV3VolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetDiskEncryptionId">resetDiskEncryptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetLimitSize">resetLimitSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetTriggerThreshold">resetTriggerThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskEncryptionId` <a name="resetDiskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetDiskEncryptionId"></a>

```typescript
public resetDiskEncryptionId(): void
```

##### `resetLimitSize` <a name="resetLimitSize" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetLimitSize"></a>

```typescript
public resetLimitSize(): void
```

##### `resetTriggerThreshold` <a name="resetTriggerThreshold" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetTriggerThreshold"></a>

```typescript
public resetTriggerThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.diskEncryptionIdInput">diskEncryptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.limitSizeInput">limitSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.triggerThresholdInput">triggerThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.diskEncryptionId">diskEncryptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.limitSize">limitSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.triggerThreshold">triggerThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskEncryptionIdInput`<sup>Optional</sup> <a name="diskEncryptionIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.diskEncryptionIdInput"></a>

```typescript
public readonly diskEncryptionIdInput: string;
```

- *Type:* string

---

##### `limitSizeInput`<sup>Optional</sup> <a name="limitSizeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.limitSizeInput"></a>

```typescript
public readonly limitSizeInput: number;
```

- *Type:* number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `triggerThresholdInput`<sup>Optional</sup> <a name="triggerThresholdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.triggerThresholdInput"></a>

```typescript
public readonly triggerThresholdInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `diskEncryptionId`<sup>Required</sup> <a name="diskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.diskEncryptionId"></a>

```typescript
public readonly diskEncryptionId: string;
```

- *Type:* string

---

##### `limitSize`<sup>Required</sup> <a name="limitSize" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.limitSize"></a>

```typescript
public readonly limitSize: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `triggerThreshold`<sup>Required</sup> <a name="triggerThreshold" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.triggerThreshold"></a>

```typescript
public readonly triggerThreshold: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RdsInstanceV3Volume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a>

---



