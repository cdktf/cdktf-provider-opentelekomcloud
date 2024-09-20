# `dcsInstanceV2` Submodule <a name="`dcsInstanceV2` Submodule" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcsInstanceV2 <a name="DcsInstanceV2" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2 opentelekomcloud_dcs_instance_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

new dcsInstanceV2.DcsInstanceV2(scope: Construct, id: string, config: DcsInstanceV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config">DcsInstanceV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config">DcsInstanceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putBackupPolicy">putBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putWhitelist">putWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetAccessUser">resetAccessUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetBackupPolicy">resetBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetDeletedNodes">resetDeletedNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetEnableWhitelist">resetEnableWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetMaintainBegin">resetMaintainBegin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetMaintainEnd">resetMaintainEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetRenameCommands">resetRenameCommands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetReservedIps">resetReservedIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetSecurityGroupId">resetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetSslEnable">resetSslEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetTemplateId">resetTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetWhitelist">resetWhitelist</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupPolicy` <a name="putBackupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putBackupPolicy"></a>

```typescript
public putBackupPolicy(value: DcsInstanceV2BackupPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy">DcsInstanceV2BackupPolicy</a>

---

##### `putParameters` <a name="putParameters" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putParameters"></a>

```typescript
public putParameters(value: IResolvable | DcsInstanceV2Parameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putTimeouts"></a>

```typescript
public putTimeouts(value: DcsInstanceV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts">DcsInstanceV2Timeouts</a>

---

##### `putWhitelist` <a name="putWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putWhitelist"></a>

```typescript
public putWhitelist(value: IResolvable | DcsInstanceV2WhitelistStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.putWhitelist.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>[]

---

##### `resetAccessUser` <a name="resetAccessUser" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetAccessUser"></a>

```typescript
public resetAccessUser(): void
```

##### `resetBackupPolicy` <a name="resetBackupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetBackupPolicy"></a>

```typescript
public resetBackupPolicy(): void
```

##### `resetDeletedNodes` <a name="resetDeletedNodes" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetDeletedNodes"></a>

```typescript
public resetDeletedNodes(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableWhitelist` <a name="resetEnableWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetEnableWhitelist"></a>

```typescript
public resetEnableWhitelist(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintainBegin` <a name="resetMaintainBegin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetMaintainBegin"></a>

```typescript
public resetMaintainBegin(): void
```

##### `resetMaintainEnd` <a name="resetMaintainEnd" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetMaintainEnd"></a>

```typescript
public resetMaintainEnd(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetPrivateIp"></a>

```typescript
public resetPrivateIp(): void
```

##### `resetRenameCommands` <a name="resetRenameCommands" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetRenameCommands"></a>

```typescript
public resetRenameCommands(): void
```

##### `resetReservedIps` <a name="resetReservedIps" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetReservedIps"></a>

```typescript
public resetReservedIps(): void
```

##### `resetSecurityGroupId` <a name="resetSecurityGroupId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetSecurityGroupId"></a>

```typescript
public resetSecurityGroupId(): void
```

##### `resetSslEnable` <a name="resetSslEnable" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetSslEnable"></a>

```typescript
public resetSslEnable(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemplateId` <a name="resetTemplateId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetTemplateId"></a>

```typescript
public resetTemplateId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWhitelist` <a name="resetWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.resetWhitelist"></a>

```typescript
public resetWhitelist(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DcsInstanceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isConstruct"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

dcsInstanceV2.DcsInstanceV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isTerraformElement"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

dcsInstanceV2.DcsInstanceV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isTerraformResource"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

dcsInstanceV2.DcsInstanceV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.generateConfigForImport"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

dcsInstanceV2.DcsInstanceV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DcsInstanceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DcsInstanceV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DcsInstanceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DcsInstanceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.backupPolicy">backupPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference">DcsInstanceV2BackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.bandwidthInfo">bandwidthInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList">DcsInstanceV2BandwidthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.cacheMode">cacheMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.cpuType">cpuType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.launchedAt">launchedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maxMemory">maxMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList">DcsInstanceV2ParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.productType">productType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.readonlyDomainName">readonlyDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.replicaCount">replicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.shardingCount">shardingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetCidr">subnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetName">subnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference">DcsInstanceV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.transparentClientIpEnable">transparentClientIpEnable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.usedMemory">usedMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.vpcName">vpcName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.whitelist">whitelist</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList">DcsInstanceV2WhitelistStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.accessUserInput">accessUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.backupPolicyInput">backupPolicyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy">DcsInstanceV2BackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.capacityInput">capacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.deletedNodesInput">deletedNodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.enableWhitelistInput">enableWhitelistInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.flavorInput">flavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainBeginInput">maintainBeginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainEndInput">maintainEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.parametersInput">parametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.privateIpInput">privateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.renameCommandsInput">renameCommandsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.reservedIpsInput">reservedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.sslEnableInput">sslEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.templateIdInput">templateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts">DcsInstanceV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.whitelistInput">whitelistInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.accessUser">accessUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.deletedNodes">deletedNodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.enableWhitelist">enableWhitelist</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.flavor">flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainBegin">maintainBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainEnd">maintainEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.renameCommands">renameCommands</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.reservedIps">reservedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.sslEnable">sslEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.templateId">templateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.backupPolicy"></a>

```typescript
public readonly backupPolicy: DcsInstanceV2BackupPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference">DcsInstanceV2BackupPolicyOutputReference</a>

---

##### `bandwidthInfo`<sup>Required</sup> <a name="bandwidthInfo" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.bandwidthInfo"></a>

```typescript
public readonly bandwidthInfo: DcsInstanceV2BandwidthInfoList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList">DcsInstanceV2BandwidthInfoList</a>

---

##### `cacheMode`<sup>Required</sup> <a name="cacheMode" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.cacheMode"></a>

```typescript
public readonly cacheMode: string;
```

- *Type:* string

---

##### `cpuType`<sup>Required</sup> <a name="cpuType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.cpuType"></a>

```typescript
public readonly cpuType: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `launchedAt`<sup>Required</sup> <a name="launchedAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.launchedAt"></a>

```typescript
public readonly launchedAt: string;
```

- *Type:* string

---

##### `maxMemory`<sup>Required</sup> <a name="maxMemory" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maxMemory"></a>

```typescript
public readonly maxMemory: number;
```

- *Type:* number

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.parameters"></a>

```typescript
public readonly parameters: DcsInstanceV2ParametersList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList">DcsInstanceV2ParametersList</a>

---

##### `productType`<sup>Required</sup> <a name="productType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.productType"></a>

```typescript
public readonly productType: string;
```

- *Type:* string

---

##### `readonlyDomainName`<sup>Required</sup> <a name="readonlyDomainName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.readonlyDomainName"></a>

```typescript
public readonly readonlyDomainName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

---

##### `shardingCount`<sup>Required</sup> <a name="shardingCount" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.shardingCount"></a>

```typescript
public readonly shardingCount: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subnetCidr`<sup>Required</sup> <a name="subnetCidr" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetCidr"></a>

```typescript
public readonly subnetCidr: string;
```

- *Type:* string

---

##### `subnetName`<sup>Required</sup> <a name="subnetName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetName"></a>

```typescript
public readonly subnetName: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.timeouts"></a>

```typescript
public readonly timeouts: DcsInstanceV2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference">DcsInstanceV2TimeoutsOutputReference</a>

---

##### `transparentClientIpEnable`<sup>Required</sup> <a name="transparentClientIpEnable" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.transparentClientIpEnable"></a>

```typescript
public readonly transparentClientIpEnable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `usedMemory`<sup>Required</sup> <a name="usedMemory" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.usedMemory"></a>

```typescript
public readonly usedMemory: number;
```

- *Type:* number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `vpcName`<sup>Required</sup> <a name="vpcName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string

---

##### `whitelist`<sup>Required</sup> <a name="whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.whitelist"></a>

```typescript
public readonly whitelist: DcsInstanceV2WhitelistStructList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList">DcsInstanceV2WhitelistStructList</a>

---

##### `accessUserInput`<sup>Optional</sup> <a name="accessUserInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.accessUserInput"></a>

```typescript
public readonly accessUserInput: string;
```

- *Type:* string

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `backupPolicyInput`<sup>Optional</sup> <a name="backupPolicyInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.backupPolicyInput"></a>

```typescript
public readonly backupPolicyInput: DcsInstanceV2BackupPolicy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy">DcsInstanceV2BackupPolicy</a>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.capacityInput"></a>

```typescript
public readonly capacityInput: number;
```

- *Type:* number

---

##### `deletedNodesInput`<sup>Optional</sup> <a name="deletedNodesInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.deletedNodesInput"></a>

```typescript
public readonly deletedNodesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableWhitelistInput`<sup>Optional</sup> <a name="enableWhitelistInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.enableWhitelistInput"></a>

```typescript
public readonly enableWhitelistInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.flavorInput"></a>

```typescript
public readonly flavorInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintainBeginInput`<sup>Optional</sup> <a name="maintainBeginInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainBeginInput"></a>

```typescript
public readonly maintainBeginInput: string;
```

- *Type:* string

---

##### `maintainEndInput`<sup>Optional</sup> <a name="maintainEndInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainEndInput"></a>

```typescript
public readonly maintainEndInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | DcsInstanceV2Parameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>[]

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.privateIpInput"></a>

```typescript
public readonly privateIpInput: string;
```

- *Type:* string

---

##### `renameCommandsInput`<sup>Optional</sup> <a name="renameCommandsInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.renameCommandsInput"></a>

```typescript
public readonly renameCommandsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `reservedIpsInput`<sup>Optional</sup> <a name="reservedIpsInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.reservedIpsInput"></a>

```typescript
public readonly reservedIpsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `sslEnableInput`<sup>Optional</sup> <a name="sslEnableInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.sslEnableInput"></a>

```typescript
public readonly sslEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.templateIdInput"></a>

```typescript
public readonly templateIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DcsInstanceV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts">DcsInstanceV2Timeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `whitelistInput`<sup>Optional</sup> <a name="whitelistInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.whitelistInput"></a>

```typescript
public readonly whitelistInput: IResolvable | DcsInstanceV2WhitelistStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>[]

---

##### `accessUser`<sup>Required</sup> <a name="accessUser" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.accessUser"></a>

```typescript
public readonly accessUser: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `deletedNodes`<sup>Required</sup> <a name="deletedNodes" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.deletedNodes"></a>

```typescript
public readonly deletedNodes: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableWhitelist`<sup>Required</sup> <a name="enableWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.enableWhitelist"></a>

```typescript
public readonly enableWhitelist: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintainBegin`<sup>Required</sup> <a name="maintainBegin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainBegin"></a>

```typescript
public readonly maintainBegin: string;
```

- *Type:* string

---

##### `maintainEnd`<sup>Required</sup> <a name="maintainEnd" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.maintainEnd"></a>

```typescript
public readonly maintainEnd: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `renameCommands`<sup>Required</sup> <a name="renameCommands" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.renameCommands"></a>

```typescript
public readonly renameCommands: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `reservedIps`<sup>Required</sup> <a name="reservedIps" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.reservedIps"></a>

```typescript
public readonly reservedIps: string[];
```

- *Type:* string[]

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `sslEnable`<sup>Required</sup> <a name="sslEnable" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.sslEnable"></a>

```typescript
public readonly sslEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DcsInstanceV2BackupPolicy <a name="DcsInstanceV2BackupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.Initializer"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

const dcsInstanceV2BackupPolicy: dcsInstanceV2.DcsInstanceV2BackupPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.backupAt">backupAt</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#backup_at DcsInstanceV2#backup_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.beginAt">beginAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#begin_at DcsInstanceV2#begin_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.backupType">backupType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#backup_type DcsInstanceV2#backup_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.periodType">periodType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#period_type DcsInstanceV2#period_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.saveDays">saveDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#save_days DcsInstanceV2#save_days}. |

---

##### `backupAt`<sup>Required</sup> <a name="backupAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.backupAt"></a>

```typescript
public readonly backupAt: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#backup_at DcsInstanceV2#backup_at}.

---

##### `beginAt`<sup>Required</sup> <a name="beginAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.beginAt"></a>

```typescript
public readonly beginAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#begin_at DcsInstanceV2#begin_at}.

---

##### `backupType`<sup>Optional</sup> <a name="backupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.backupType"></a>

```typescript
public readonly backupType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#backup_type DcsInstanceV2#backup_type}.

---

##### `periodType`<sup>Optional</sup> <a name="periodType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.periodType"></a>

```typescript
public readonly periodType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#period_type DcsInstanceV2#period_type}.

---

##### `saveDays`<sup>Optional</sup> <a name="saveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy.property.saveDays"></a>

```typescript
public readonly saveDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#save_days DcsInstanceV2#save_days}.

---

### DcsInstanceV2BandwidthInfo <a name="DcsInstanceV2BandwidthInfo" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfo.Initializer"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

const dcsInstanceV2BandwidthInfo: dcsInstanceV2.DcsInstanceV2BandwidthInfo = { ... }
```


### DcsInstanceV2Config <a name="DcsInstanceV2Config" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.Initializer"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

const dcsInstanceV2Config: dcsInstanceV2.DcsInstanceV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#availability_zones DcsInstanceV2#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.capacity">capacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#capacity DcsInstanceV2#capacity}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#engine DcsInstanceV2#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.flavor">flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#flavor DcsInstanceV2#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#name DcsInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#subnet_id DcsInstanceV2#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#vpc_id DcsInstanceV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.accessUser">accessUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#access_user DcsInstanceV2#access_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.backupPolicy">backupPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy">DcsInstanceV2BackupPolicy</a></code> | backup_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.deletedNodes">deletedNodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#deleted_nodes DcsInstanceV2#deleted_nodes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#description DcsInstanceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.enableWhitelist">enableWhitelist</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#enable_whitelist DcsInstanceV2#enable_whitelist}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.engineVersion">engineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#engine_version DcsInstanceV2#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#id DcsInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.maintainBegin">maintainBegin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#maintain_begin DcsInstanceV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.maintainEnd">maintainEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#maintain_end DcsInstanceV2#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.parameters">parameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>[]</code> | parameters block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#password DcsInstanceV2#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#port DcsInstanceV2#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.privateIp">privateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#private_ip DcsInstanceV2#private_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.renameCommands">renameCommands</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#rename_commands DcsInstanceV2#rename_commands}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.reservedIps">reservedIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#reserved_ips DcsInstanceV2#reserved_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#security_group_id DcsInstanceV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.sslEnable">sslEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#ssl_enable DcsInstanceV2#ssl_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#tags DcsInstanceV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.templateId">templateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#template_id DcsInstanceV2#template_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts">DcsInstanceV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.whitelist">whitelist</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>[]</code> | whitelist block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#availability_zones DcsInstanceV2#availability_zones}.

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#capacity DcsInstanceV2#capacity}.

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#engine DcsInstanceV2#engine}.

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#flavor DcsInstanceV2#flavor}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#name DcsInstanceV2#name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#subnet_id DcsInstanceV2#subnet_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#vpc_id DcsInstanceV2#vpc_id}.

---

##### `accessUser`<sup>Optional</sup> <a name="accessUser" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.accessUser"></a>

```typescript
public readonly accessUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#access_user DcsInstanceV2#access_user}.

---

##### `backupPolicy`<sup>Optional</sup> <a name="backupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.backupPolicy"></a>

```typescript
public readonly backupPolicy: DcsInstanceV2BackupPolicy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy">DcsInstanceV2BackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#backup_policy DcsInstanceV2#backup_policy}

---

##### `deletedNodes`<sup>Optional</sup> <a name="deletedNodes" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.deletedNodes"></a>

```typescript
public readonly deletedNodes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#deleted_nodes DcsInstanceV2#deleted_nodes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#description DcsInstanceV2#description}.

---

##### `enableWhitelist`<sup>Optional</sup> <a name="enableWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.enableWhitelist"></a>

```typescript
public readonly enableWhitelist: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#enable_whitelist DcsInstanceV2#enable_whitelist}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#engine_version DcsInstanceV2#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#id DcsInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintainBegin`<sup>Optional</sup> <a name="maintainBegin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.maintainBegin"></a>

```typescript
public readonly maintainBegin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#maintain_begin DcsInstanceV2#maintain_begin}.

---

##### `maintainEnd`<sup>Optional</sup> <a name="maintainEnd" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.maintainEnd"></a>

```typescript
public readonly maintainEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#maintain_end DcsInstanceV2#maintain_end}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | DcsInstanceV2Parameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#parameters DcsInstanceV2#parameters}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#password DcsInstanceV2#password}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#port DcsInstanceV2#port}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#private_ip DcsInstanceV2#private_ip}.

---

##### `renameCommands`<sup>Optional</sup> <a name="renameCommands" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.renameCommands"></a>

```typescript
public readonly renameCommands: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#rename_commands DcsInstanceV2#rename_commands}.

---

##### `reservedIps`<sup>Optional</sup> <a name="reservedIps" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.reservedIps"></a>

```typescript
public readonly reservedIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#reserved_ips DcsInstanceV2#reserved_ips}.

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#security_group_id DcsInstanceV2#security_group_id}.

---

##### `sslEnable`<sup>Optional</sup> <a name="sslEnable" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.sslEnable"></a>

```typescript
public readonly sslEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#ssl_enable DcsInstanceV2#ssl_enable}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#tags DcsInstanceV2#tags}.

---

##### `templateId`<sup>Optional</sup> <a name="templateId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#template_id DcsInstanceV2#template_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: DcsInstanceV2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts">DcsInstanceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#timeouts DcsInstanceV2#timeouts}

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Config.property.whitelist"></a>

```typescript
public readonly whitelist: IResolvable | DcsInstanceV2WhitelistStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>[]

whitelist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#whitelist DcsInstanceV2#whitelist}

---

### DcsInstanceV2Parameters <a name="DcsInstanceV2Parameters" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters.Initializer"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

const dcsInstanceV2Parameters: dcsInstanceV2.DcsInstanceV2Parameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#id DcsInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#name DcsInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#value DcsInstanceV2#value}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#id DcsInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#name DcsInstanceV2#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#value DcsInstanceV2#value}.

---

### DcsInstanceV2Timeouts <a name="DcsInstanceV2Timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts.Initializer"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

const dcsInstanceV2Timeouts: dcsInstanceV2.DcsInstanceV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#create DcsInstanceV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#delete DcsInstanceV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#update DcsInstanceV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#create DcsInstanceV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#delete DcsInstanceV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#update DcsInstanceV2#update}.

---

### DcsInstanceV2WhitelistStruct <a name="DcsInstanceV2WhitelistStruct" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct.Initializer"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

const dcsInstanceV2WhitelistStruct: dcsInstanceV2.DcsInstanceV2WhitelistStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct.property.groupName">groupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#group_name DcsInstanceV2#group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct.property.ipList">ipList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#ip_list DcsInstanceV2#ip_list}. |

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#group_name DcsInstanceV2#group_name}.

---

##### `ipList`<sup>Required</sup> <a name="ipList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct.property.ipList"></a>

```typescript
public readonly ipList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/dcs_instance_v2#ip_list DcsInstanceV2#ip_list}.

---

## Classes <a name="Classes" id="Classes"></a>

### DcsInstanceV2BackupPolicyOutputReference <a name="DcsInstanceV2BackupPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.Initializer"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

new dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resetBackupType">resetBackupType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resetPeriodType">resetPeriodType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resetSaveDays">resetSaveDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupType` <a name="resetBackupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resetBackupType"></a>

```typescript
public resetBackupType(): void
```

##### `resetPeriodType` <a name="resetPeriodType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resetPeriodType"></a>

```typescript
public resetPeriodType(): void
```

##### `resetSaveDays` <a name="resetSaveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.resetSaveDays"></a>

```typescript
public resetSaveDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupAtInput">backupAtInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupTypeInput">backupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.beginAtInput">beginAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.periodTypeInput">periodTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.saveDaysInput">saveDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupAt">backupAt</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupType">backupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.beginAt">beginAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.periodType">periodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.saveDays">saveDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy">DcsInstanceV2BackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupAtInput`<sup>Optional</sup> <a name="backupAtInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupAtInput"></a>

```typescript
public readonly backupAtInput: number[];
```

- *Type:* number[]

---

##### `backupTypeInput`<sup>Optional</sup> <a name="backupTypeInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupTypeInput"></a>

```typescript
public readonly backupTypeInput: string;
```

- *Type:* string

---

##### `beginAtInput`<sup>Optional</sup> <a name="beginAtInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.beginAtInput"></a>

```typescript
public readonly beginAtInput: string;
```

- *Type:* string

---

##### `periodTypeInput`<sup>Optional</sup> <a name="periodTypeInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.periodTypeInput"></a>

```typescript
public readonly periodTypeInput: string;
```

- *Type:* string

---

##### `saveDaysInput`<sup>Optional</sup> <a name="saveDaysInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.saveDaysInput"></a>

```typescript
public readonly saveDaysInput: number;
```

- *Type:* number

---

##### `backupAt`<sup>Required</sup> <a name="backupAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupAt"></a>

```typescript
public readonly backupAt: number[];
```

- *Type:* number[]

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.backupType"></a>

```typescript
public readonly backupType: string;
```

- *Type:* string

---

##### `beginAt`<sup>Required</sup> <a name="beginAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.beginAt"></a>

```typescript
public readonly beginAt: string;
```

- *Type:* string

---

##### `periodType`<sup>Required</sup> <a name="periodType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.periodType"></a>

```typescript
public readonly periodType: string;
```

- *Type:* string

---

##### `saveDays`<sup>Required</sup> <a name="saveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.saveDays"></a>

```typescript
public readonly saveDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DcsInstanceV2BackupPolicy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BackupPolicy">DcsInstanceV2BackupPolicy</a>

---


### DcsInstanceV2BandwidthInfoList <a name="DcsInstanceV2BandwidthInfoList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.Initializer"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

new dcsInstanceV2.DcsInstanceV2BandwidthInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.get"></a>

```typescript
public get(index: number): DcsInstanceV2BandwidthInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DcsInstanceV2BandwidthInfoOutputReference <a name="DcsInstanceV2BandwidthInfoOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

new dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.bandwidth">bandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.beginTime">beginTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.currentTime">currentTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.expandCount">expandCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.expandEffectTime">expandEffectTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.expandIntervalTime">expandIntervalTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.maxExpandCount">maxExpandCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.nextExpandTime">nextExpandTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.taskRunning">taskRunning</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfo">DcsInstanceV2BandwidthInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.bandwidth"></a>

```typescript
public readonly bandwidth: number;
```

- *Type:* number

---

##### `beginTime`<sup>Required</sup> <a name="beginTime" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.beginTime"></a>

```typescript
public readonly beginTime: string;
```

- *Type:* string

---

##### `currentTime`<sup>Required</sup> <a name="currentTime" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.currentTime"></a>

```typescript
public readonly currentTime: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `expandCount`<sup>Required</sup> <a name="expandCount" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.expandCount"></a>

```typescript
public readonly expandCount: number;
```

- *Type:* number

---

##### `expandEffectTime`<sup>Required</sup> <a name="expandEffectTime" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.expandEffectTime"></a>

```typescript
public readonly expandEffectTime: number;
```

- *Type:* number

---

##### `expandIntervalTime`<sup>Required</sup> <a name="expandIntervalTime" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.expandIntervalTime"></a>

```typescript
public readonly expandIntervalTime: number;
```

- *Type:* number

---

##### `maxExpandCount`<sup>Required</sup> <a name="maxExpandCount" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.maxExpandCount"></a>

```typescript
public readonly maxExpandCount: number;
```

- *Type:* number

---

##### `nextExpandTime`<sup>Required</sup> <a name="nextExpandTime" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.nextExpandTime"></a>

```typescript
public readonly nextExpandTime: string;
```

- *Type:* string

---

##### `taskRunning`<sup>Required</sup> <a name="taskRunning" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.taskRunning"></a>

```typescript
public readonly taskRunning: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DcsInstanceV2BandwidthInfo;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2BandwidthInfo">DcsInstanceV2BandwidthInfo</a>

---


### DcsInstanceV2ParametersList <a name="DcsInstanceV2ParametersList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.Initializer"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

new dcsInstanceV2.DcsInstanceV2ParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.get"></a>

```typescript
public get(index: number): DcsInstanceV2ParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DcsInstanceV2Parameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>[]

---


### DcsInstanceV2ParametersOutputReference <a name="DcsInstanceV2ParametersOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

new dcsInstanceV2.DcsInstanceV2ParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2ParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DcsInstanceV2Parameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Parameters">DcsInstanceV2Parameters</a>

---


### DcsInstanceV2TimeoutsOutputReference <a name="DcsInstanceV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

new dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts">DcsInstanceV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DcsInstanceV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2Timeouts">DcsInstanceV2Timeouts</a>

---


### DcsInstanceV2WhitelistStructList <a name="DcsInstanceV2WhitelistStructList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.Initializer"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

new dcsInstanceV2.DcsInstanceV2WhitelistStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.get"></a>

```typescript
public get(index: number): DcsInstanceV2WhitelistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DcsInstanceV2WhitelistStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>[]

---


### DcsInstanceV2WhitelistStructOutputReference <a name="DcsInstanceV2WhitelistStructOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer"></a>

```typescript
import { dcsInstanceV2 } from '@cdktf/provider-opentelekomcloud'

new dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.ipListInput">ipListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.ipList">ipList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `ipListInput`<sup>Optional</sup> <a name="ipListInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.ipListInput"></a>

```typescript
public readonly ipListInput: string[];
```

- *Type:* string[]

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `ipList`<sup>Required</sup> <a name="ipList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.ipList"></a>

```typescript
public readonly ipList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DcsInstanceV2WhitelistStruct;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV2.DcsInstanceV2WhitelistStruct">DcsInstanceV2WhitelistStruct</a>

---



