# `taurusdbMysqlInstanceV3` Submodule <a name="`taurusdbMysqlInstanceV3` Submodule" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TaurusdbMysqlInstanceV3 <a name="TaurusdbMysqlInstanceV3" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3 opentelekomcloud_taurusdb_mysql_instance_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer"></a>

```typescript
import { taurusdbMysqlInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3(scope: Construct, id: string, config: TaurusdbMysqlInstanceV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config">TaurusdbMysqlInstanceV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config">TaurusdbMysqlInstanceV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putBackupStrategy">putBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putDatastore">putDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetAvailabilityZoneMode">resetAvailabilityZoneMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetBackupStrategy">resetBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetConfigurationId">resetConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetDatastore">resetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetDedicatedResourceId">resetDedicatedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetEnterpriseProjectId">resetEnterpriseProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetMasterAvailabilityZone">resetMasterAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetReadReplicas">resetReadReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecondsLevelMonitoringEnabled">resetSecondsLevelMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecondsLevelMonitoringPeriod">resetSecondsLevelMonitoringPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecurityGroupId">resetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTableNameCaseSensitivity">resetTableNameCaseSensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupStrategy` <a name="putBackupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putBackupStrategy"></a>

```typescript
public putBackupStrategy(value: TaurusdbMysqlInstanceV3BackupStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putBackupStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a>

---

##### `putDatastore` <a name="putDatastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putDatastore"></a>

```typescript
public putDatastore(value: TaurusdbMysqlInstanceV3Datastore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putTimeouts"></a>

```typescript
public putTimeouts(value: TaurusdbMysqlInstanceV3Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a>

---

##### `resetAvailabilityZoneMode` <a name="resetAvailabilityZoneMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetAvailabilityZoneMode"></a>

```typescript
public resetAvailabilityZoneMode(): void
```

##### `resetBackupStrategy` <a name="resetBackupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetBackupStrategy"></a>

```typescript
public resetBackupStrategy(): void
```

##### `resetConfigurationId` <a name="resetConfigurationId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetConfigurationId"></a>

```typescript
public resetConfigurationId(): void
```

##### `resetDatastore` <a name="resetDatastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetDatastore"></a>

```typescript
public resetDatastore(): void
```

##### `resetDedicatedResourceId` <a name="resetDedicatedResourceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetDedicatedResourceId"></a>

```typescript
public resetDedicatedResourceId(): void
```

##### `resetEnterpriseProjectId` <a name="resetEnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetEnterpriseProjectId"></a>

```typescript
public resetEnterpriseProjectId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMasterAvailabilityZone` <a name="resetMasterAvailabilityZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetMasterAvailabilityZone"></a>

```typescript
public resetMasterAvailabilityZone(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetReadReplicas` <a name="resetReadReplicas" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetReadReplicas"></a>

```typescript
public resetReadReplicas(): void
```

##### `resetSecondsLevelMonitoringEnabled` <a name="resetSecondsLevelMonitoringEnabled" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecondsLevelMonitoringEnabled"></a>

```typescript
public resetSecondsLevelMonitoringEnabled(): void
```

##### `resetSecondsLevelMonitoringPeriod` <a name="resetSecondsLevelMonitoringPeriod" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecondsLevelMonitoringPeriod"></a>

```typescript
public resetSecondsLevelMonitoringPeriod(): void
```

##### `resetSecurityGroupId` <a name="resetSecurityGroupId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecurityGroupId"></a>

```typescript
public resetSecurityGroupId(): void
```

##### `resetTableNameCaseSensitivity` <a name="resetTableNameCaseSensitivity" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTableNameCaseSensitivity"></a>

```typescript
public resetTableNameCaseSensitivity(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TaurusdbMysqlInstanceV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isConstruct"></a>

```typescript
import { taurusdbMysqlInstanceV3 } from '@cdktf/provider-opentelekomcloud'

taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformElement"></a>

```typescript
import { taurusdbMysqlInstanceV3 } from '@cdktf/provider-opentelekomcloud'

taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformResource"></a>

```typescript
import { taurusdbMysqlInstanceV3 } from '@cdktf/provider-opentelekomcloud'

taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport"></a>

```typescript
import { taurusdbMysqlInstanceV3 } from '@cdktf/provider-opentelekomcloud'

taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TaurusdbMysqlInstanceV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TaurusdbMysqlInstanceV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TaurusdbMysqlInstanceV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TaurusdbMysqlInstanceV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.backupStrategy">backupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference">TaurusdbMysqlInstanceV3BackupStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference">TaurusdbMysqlInstanceV3DatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dbUserName">dbUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList">TaurusdbMysqlInstanceV3NodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.privateDnsName">privateDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.privateWriteIp">privateWriteIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference">TaurusdbMysqlInstanceV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.availabilityZoneModeInput">availabilityZoneModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.backupStrategyInput">backupStrategyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.configurationIdInput">configurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.datastoreInput">datastoreInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dedicatedResourceIdInput">dedicatedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.enterpriseProjectIdInput">enterpriseProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.flavorInput">flavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.masterAvailabilityZoneInput">masterAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.readReplicasInput">readReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringEnabledInput">secondsLevelMonitoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringPeriodInput">secondsLevelMonitoringPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tableNameCaseSensitivityInput">tableNameCaseSensitivityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.availabilityZoneMode">availabilityZoneMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dedicatedResourceId">dedicatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.flavor">flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.masterAvailabilityZone">masterAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.readReplicas">readReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringEnabled">secondsLevelMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringPeriod">secondsLevelMonitoringPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tableNameCaseSensitivity">tableNameCaseSensitivity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupStrategy`<sup>Required</sup> <a name="backupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.backupStrategy"></a>

```typescript
public readonly backupStrategy: TaurusdbMysqlInstanceV3BackupStrategyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference">TaurusdbMysqlInstanceV3BackupStrategyOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.datastore"></a>

```typescript
public readonly datastore: TaurusdbMysqlInstanceV3DatastoreOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference">TaurusdbMysqlInstanceV3DatastoreOutputReference</a>

---

##### `dbUserName`<sup>Required</sup> <a name="dbUserName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dbUserName"></a>

```typescript
public readonly dbUserName: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.nodes"></a>

```typescript
public readonly nodes: TaurusdbMysqlInstanceV3NodesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList">TaurusdbMysqlInstanceV3NodesList</a>

---

##### `privateDnsName`<sup>Required</sup> <a name="privateDnsName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.privateDnsName"></a>

```typescript
public readonly privateDnsName: string;
```

- *Type:* string

---

##### `privateWriteIp`<sup>Required</sup> <a name="privateWriteIp" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.privateWriteIp"></a>

```typescript
public readonly privateWriteIp: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeouts"></a>

```typescript
public readonly timeouts: TaurusdbMysqlInstanceV3TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference">TaurusdbMysqlInstanceV3TimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `availabilityZoneModeInput`<sup>Optional</sup> <a name="availabilityZoneModeInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.availabilityZoneModeInput"></a>

```typescript
public readonly availabilityZoneModeInput: string;
```

- *Type:* string

---

##### `backupStrategyInput`<sup>Optional</sup> <a name="backupStrategyInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.backupStrategyInput"></a>

```typescript
public readonly backupStrategyInput: TaurusdbMysqlInstanceV3BackupStrategy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a>

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.configurationIdInput"></a>

```typescript
public readonly configurationIdInput: string;
```

- *Type:* string

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.datastoreInput"></a>

```typescript
public readonly datastoreInput: TaurusdbMysqlInstanceV3Datastore;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a>

---

##### `dedicatedResourceIdInput`<sup>Optional</sup> <a name="dedicatedResourceIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dedicatedResourceIdInput"></a>

```typescript
public readonly dedicatedResourceIdInput: string;
```

- *Type:* string

---

##### `enterpriseProjectIdInput`<sup>Optional</sup> <a name="enterpriseProjectIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.enterpriseProjectIdInput"></a>

```typescript
public readonly enterpriseProjectIdInput: string;
```

- *Type:* string

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.flavorInput"></a>

```typescript
public readonly flavorInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `masterAvailabilityZoneInput`<sup>Optional</sup> <a name="masterAvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.masterAvailabilityZoneInput"></a>

```typescript
public readonly masterAvailabilityZoneInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `readReplicasInput`<sup>Optional</sup> <a name="readReplicasInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.readReplicasInput"></a>

```typescript
public readonly readReplicasInput: number;
```

- *Type:* number

---

##### `secondsLevelMonitoringEnabledInput`<sup>Optional</sup> <a name="secondsLevelMonitoringEnabledInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringEnabledInput"></a>

```typescript
public readonly secondsLevelMonitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secondsLevelMonitoringPeriodInput`<sup>Optional</sup> <a name="secondsLevelMonitoringPeriodInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringPeriodInput"></a>

```typescript
public readonly secondsLevelMonitoringPeriodInput: number;
```

- *Type:* number

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tableNameCaseSensitivityInput`<sup>Optional</sup> <a name="tableNameCaseSensitivityInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tableNameCaseSensitivityInput"></a>

```typescript
public readonly tableNameCaseSensitivityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | TaurusdbMysqlInstanceV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `availabilityZoneMode`<sup>Required</sup> <a name="availabilityZoneMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.availabilityZoneMode"></a>

```typescript
public readonly availabilityZoneMode: string;
```

- *Type:* string

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `dedicatedResourceId`<sup>Required</sup> <a name="dedicatedResourceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dedicatedResourceId"></a>

```typescript
public readonly dedicatedResourceId: string;
```

- *Type:* string

---

##### `enterpriseProjectId`<sup>Required</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.enterpriseProjectId"></a>

```typescript
public readonly enterpriseProjectId: string;
```

- *Type:* string

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `masterAvailabilityZone`<sup>Required</sup> <a name="masterAvailabilityZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.masterAvailabilityZone"></a>

```typescript
public readonly masterAvailabilityZone: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `readReplicas`<sup>Required</sup> <a name="readReplicas" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.readReplicas"></a>

```typescript
public readonly readReplicas: number;
```

- *Type:* number

---

##### `secondsLevelMonitoringEnabled`<sup>Required</sup> <a name="secondsLevelMonitoringEnabled" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringEnabled"></a>

```typescript
public readonly secondsLevelMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secondsLevelMonitoringPeriod`<sup>Required</sup> <a name="secondsLevelMonitoringPeriod" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringPeriod"></a>

```typescript
public readonly secondsLevelMonitoringPeriod: number;
```

- *Type:* number

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tableNameCaseSensitivity`<sup>Required</sup> <a name="tableNameCaseSensitivity" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tableNameCaseSensitivity"></a>

```typescript
public readonly tableNameCaseSensitivity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TaurusdbMysqlInstanceV3BackupStrategy <a name="TaurusdbMysqlInstanceV3BackupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy.Initializer"></a>

```typescript
import { taurusdbMysqlInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const taurusdbMysqlInstanceV3BackupStrategy: taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#start_time TaurusdbMysqlInstanceV3#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy.property.keepDays">keepDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#keep_days TaurusdbMysqlInstanceV3#keep_days}. |

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#start_time TaurusdbMysqlInstanceV3#start_time}.

---

##### `keepDays`<sup>Optional</sup> <a name="keepDays" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy.property.keepDays"></a>

```typescript
public readonly keepDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#keep_days TaurusdbMysqlInstanceV3#keep_days}.

---

### TaurusdbMysqlInstanceV3Config <a name="TaurusdbMysqlInstanceV3Config" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.Initializer"></a>

```typescript
import { taurusdbMysqlInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const taurusdbMysqlInstanceV3Config: taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.flavor">flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#flavor TaurusdbMysqlInstanceV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#name TaurusdbMysqlInstanceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#password TaurusdbMysqlInstanceV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#subnet_id TaurusdbMysqlInstanceV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#vpc_id TaurusdbMysqlInstanceV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.availabilityZoneMode">availabilityZoneMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#availability_zone_mode TaurusdbMysqlInstanceV3#availability_zone_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.backupStrategy">backupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a></code> | backup_strategy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.configurationId">configurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#configuration_id TaurusdbMysqlInstanceV3#configuration_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a></code> | datastore block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.dedicatedResourceId">dedicatedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#dedicated_resource_id TaurusdbMysqlInstanceV3#dedicated_resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#enterprise_project_id TaurusdbMysqlInstanceV3#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#id TaurusdbMysqlInstanceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.masterAvailabilityZone">masterAvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#master_availability_zone TaurusdbMysqlInstanceV3#master_availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#port TaurusdbMysqlInstanceV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.readReplicas">readReplicas</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#read_replicas TaurusdbMysqlInstanceV3#read_replicas}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.secondsLevelMonitoringEnabled">secondsLevelMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_enabled TaurusdbMysqlInstanceV3#seconds_level_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.secondsLevelMonitoringPeriod">secondsLevelMonitoringPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_period TaurusdbMysqlInstanceV3#seconds_level_monitoring_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#security_group_id TaurusdbMysqlInstanceV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.tableNameCaseSensitivity">tableNameCaseSensitivity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#table_name_case_sensitivity TaurusdbMysqlInstanceV3#table_name_case_sensitivity}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#time_zone TaurusdbMysqlInstanceV3#time_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#volume_size TaurusdbMysqlInstanceV3#volume_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#flavor TaurusdbMysqlInstanceV3#flavor}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#name TaurusdbMysqlInstanceV3#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#password TaurusdbMysqlInstanceV3#password}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#subnet_id TaurusdbMysqlInstanceV3#subnet_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#vpc_id TaurusdbMysqlInstanceV3#vpc_id}.

---

##### `availabilityZoneMode`<sup>Optional</sup> <a name="availabilityZoneMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.availabilityZoneMode"></a>

```typescript
public readonly availabilityZoneMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#availability_zone_mode TaurusdbMysqlInstanceV3#availability_zone_mode}.

---

##### `backupStrategy`<sup>Optional</sup> <a name="backupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.backupStrategy"></a>

```typescript
public readonly backupStrategy: TaurusdbMysqlInstanceV3BackupStrategy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a>

backup_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#backup_strategy TaurusdbMysqlInstanceV3#backup_strategy}

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#configuration_id TaurusdbMysqlInstanceV3#configuration_id}.

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.datastore"></a>

```typescript
public readonly datastore: TaurusdbMysqlInstanceV3Datastore;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#datastore TaurusdbMysqlInstanceV3#datastore}

---

##### `dedicatedResourceId`<sup>Optional</sup> <a name="dedicatedResourceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.dedicatedResourceId"></a>

```typescript
public readonly dedicatedResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#dedicated_resource_id TaurusdbMysqlInstanceV3#dedicated_resource_id}.

---

##### `enterpriseProjectId`<sup>Optional</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.enterpriseProjectId"></a>

```typescript
public readonly enterpriseProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#enterprise_project_id TaurusdbMysqlInstanceV3#enterprise_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#id TaurusdbMysqlInstanceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masterAvailabilityZone`<sup>Optional</sup> <a name="masterAvailabilityZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.masterAvailabilityZone"></a>

```typescript
public readonly masterAvailabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#master_availability_zone TaurusdbMysqlInstanceV3#master_availability_zone}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#port TaurusdbMysqlInstanceV3#port}.

---

##### `readReplicas`<sup>Optional</sup> <a name="readReplicas" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.readReplicas"></a>

```typescript
public readonly readReplicas: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#read_replicas TaurusdbMysqlInstanceV3#read_replicas}.

---

##### `secondsLevelMonitoringEnabled`<sup>Optional</sup> <a name="secondsLevelMonitoringEnabled" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.secondsLevelMonitoringEnabled"></a>

```typescript
public readonly secondsLevelMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_enabled TaurusdbMysqlInstanceV3#seconds_level_monitoring_enabled}.

---

##### `secondsLevelMonitoringPeriod`<sup>Optional</sup> <a name="secondsLevelMonitoringPeriod" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.secondsLevelMonitoringPeriod"></a>

```typescript
public readonly secondsLevelMonitoringPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_period TaurusdbMysqlInstanceV3#seconds_level_monitoring_period}.

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#security_group_id TaurusdbMysqlInstanceV3#security_group_id}.

---

##### `tableNameCaseSensitivity`<sup>Optional</sup> <a name="tableNameCaseSensitivity" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.tableNameCaseSensitivity"></a>

```typescript
public readonly tableNameCaseSensitivity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#table_name_case_sensitivity TaurusdbMysqlInstanceV3#table_name_case_sensitivity}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.timeouts"></a>

```typescript
public readonly timeouts: TaurusdbMysqlInstanceV3Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#timeouts TaurusdbMysqlInstanceV3#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#time_zone TaurusdbMysqlInstanceV3#time_zone}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#volume_size TaurusdbMysqlInstanceV3#volume_size}.

---

### TaurusdbMysqlInstanceV3Datastore <a name="TaurusdbMysqlInstanceV3Datastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore.Initializer"></a>

```typescript
import { taurusdbMysqlInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const taurusdbMysqlInstanceV3Datastore: taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#engine TaurusdbMysqlInstanceV3#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#version TaurusdbMysqlInstanceV3#version}. |

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#engine TaurusdbMysqlInstanceV3#engine}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#version TaurusdbMysqlInstanceV3#version}.

---

### TaurusdbMysqlInstanceV3Nodes <a name="TaurusdbMysqlInstanceV3Nodes" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Nodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Nodes.Initializer"></a>

```typescript
import { taurusdbMysqlInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const taurusdbMysqlInstanceV3Nodes: taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Nodes = { ... }
```


### TaurusdbMysqlInstanceV3Timeouts <a name="TaurusdbMysqlInstanceV3Timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.Initializer"></a>

```typescript
import { taurusdbMysqlInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const taurusdbMysqlInstanceV3Timeouts: taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#create TaurusdbMysqlInstanceV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#delete TaurusdbMysqlInstanceV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#update TaurusdbMysqlInstanceV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#create TaurusdbMysqlInstanceV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#delete TaurusdbMysqlInstanceV3#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/taurusdb_mysql_instance_v3#update TaurusdbMysqlInstanceV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TaurusdbMysqlInstanceV3BackupStrategyOutputReference <a name="TaurusdbMysqlInstanceV3BackupStrategyOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.Initializer"></a>

```typescript
import { taurusdbMysqlInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.resetKeepDays">resetKeepDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeepDays` <a name="resetKeepDays" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.resetKeepDays"></a>

```typescript
public resetKeepDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDaysInput">keepDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDays">keepDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keepDaysInput`<sup>Optional</sup> <a name="keepDaysInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDaysInput"></a>

```typescript
public readonly keepDaysInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `keepDays`<sup>Required</sup> <a name="keepDays" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDays"></a>

```typescript
public readonly keepDays: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TaurusdbMysqlInstanceV3BackupStrategy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a>

---


### TaurusdbMysqlInstanceV3DatastoreOutputReference <a name="TaurusdbMysqlInstanceV3DatastoreOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.Initializer"></a>

```typescript
import { taurusdbMysqlInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TaurusdbMysqlInstanceV3Datastore;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a>

---


### TaurusdbMysqlInstanceV3NodesList <a name="TaurusdbMysqlInstanceV3NodesList" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer"></a>

```typescript
import { taurusdbMysqlInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.get"></a>

```typescript
public get(index: number): TaurusdbMysqlInstanceV3NodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### TaurusdbMysqlInstanceV3NodesOutputReference <a name="TaurusdbMysqlInstanceV3NodesOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer"></a>

```typescript
import { taurusdbMysqlInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.privateReadIp">privateReadIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Nodes">TaurusdbMysqlInstanceV3Nodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateReadIp`<sup>Required</sup> <a name="privateReadIp" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.privateReadIp"></a>

```typescript
public readonly privateReadIp: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TaurusdbMysqlInstanceV3Nodes;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Nodes">TaurusdbMysqlInstanceV3Nodes</a>

---


### TaurusdbMysqlInstanceV3TimeoutsOutputReference <a name="TaurusdbMysqlInstanceV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.Initializer"></a>

```typescript
import { taurusdbMysqlInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TaurusdbMysqlInstanceV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a>

---



