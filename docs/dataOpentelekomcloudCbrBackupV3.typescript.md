# `dataOpentelekomcloudCbrBackupV3` Submodule <a name="`dataOpentelekomcloudCbrBackupV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCbrBackupV3 <a name="DataOpentelekomcloudCbrBackupV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3 opentelekomcloud_cbr_backup_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer"></a>

```typescript
import { dataOpentelekomcloudCbrBackupV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3(scope: Construct, id: string, config?: DataOpentelekomcloudCbrBackupV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config">DataOpentelekomcloudCbrBackupV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config">DataOpentelekomcloudCbrBackupV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetAutoTrigger">resetAutoTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetBootable">resetBootable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetCheckpointId">resetCheckpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetContainSystemDisk">resetContainSystemDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetExpiredAt">resetExpiredAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetImageType">resetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetIncremental">resetIncremental</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetProviderId">resetProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceAz">resetResourceAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceName">resetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceSize">resetResourceSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSupportedRestoreMode">resetSupportedRestoreMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSupportLld">resetSupportLld</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSystemDisk">resetSystemDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetVaultId">resetVaultId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAutoTrigger` <a name="resetAutoTrigger" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetAutoTrigger"></a>

```typescript
public resetAutoTrigger(): void
```

##### `resetBootable` <a name="resetBootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetBootable"></a>

```typescript
public resetBootable(): void
```

##### `resetCheckpointId` <a name="resetCheckpointId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetCheckpointId"></a>

```typescript
public resetCheckpointId(): void
```

##### `resetContainSystemDisk` <a name="resetContainSystemDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetContainSystemDisk"></a>

```typescript
public resetContainSystemDisk(): void
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetCreatedAt"></a>

```typescript
public resetCreatedAt(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetExpiredAt` <a name="resetExpiredAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetExpiredAt"></a>

```typescript
public resetExpiredAt(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageType` <a name="resetImageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetImageType"></a>

```typescript
public resetImageType(): void
```

##### `resetIncremental` <a name="resetIncremental" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetIncremental"></a>

```typescript
public resetIncremental(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParentId` <a name="resetParentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetParentId"></a>

```typescript
public resetParentId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetProviderId` <a name="resetProviderId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetProviderId"></a>

```typescript
public resetProviderId(): void
```

##### `resetResourceAz` <a name="resetResourceAz" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceAz"></a>

```typescript
public resetResourceAz(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetResourceName` <a name="resetResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceName"></a>

```typescript
public resetResourceName(): void
```

##### `resetResourceSize` <a name="resetResourceSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceSize"></a>

```typescript
public resetResourceSize(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetSupportedRestoreMode` <a name="resetSupportedRestoreMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSupportedRestoreMode"></a>

```typescript
public resetSupportedRestoreMode(): void
```

##### `resetSupportLld` <a name="resetSupportLld" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSupportLld"></a>

```typescript
public resetSupportLld(): void
```

##### `resetSystemDisk` <a name="resetSystemDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSystemDisk"></a>

```typescript
public resetSystemDisk(): void
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetUpdatedAt"></a>

```typescript
public resetUpdatedAt(): void
```

##### `resetVaultId` <a name="resetVaultId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetVaultId"></a>

```typescript
public resetVaultId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCbrBackupV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isConstruct"></a>

```typescript
import { dataOpentelekomcloudCbrBackupV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudCbrBackupV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudCbrBackupV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudCbrBackupV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudCbrBackupV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudCbrBackupV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudCbrBackupV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCbrBackupV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.autoTriggerInput">autoTriggerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.bootableInput">bootableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.checkpointIdInput">checkpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.containSystemDiskInput">containSystemDiskInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.createdAtInput">createdAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.expiredAtInput">expiredAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.imageTypeInput">imageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.incrementalInput">incrementalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.providerIdInput">providerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceAzInput">resourceAzInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceSizeInput">resourceSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportedRestoreModeInput">supportedRestoreModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportLldInput">supportLldInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.systemDiskInput">systemDiskInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.updatedAtInput">updatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.autoTrigger">autoTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.bootable">bootable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.checkpointId">checkpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.containSystemDisk">containSystemDisk</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.expiredAt">expiredAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.incremental">incremental</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.providerId">providerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceAz">resourceAz</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceSize">resourceSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportedRestoreMode">supportedRestoreMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportLld">supportLld</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.systemDisk">systemDisk</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autoTriggerInput`<sup>Optional</sup> <a name="autoTriggerInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.autoTriggerInput"></a>

```typescript
public readonly autoTriggerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bootableInput`<sup>Optional</sup> <a name="bootableInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.bootableInput"></a>

```typescript
public readonly bootableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checkpointIdInput`<sup>Optional</sup> <a name="checkpointIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.checkpointIdInput"></a>

```typescript
public readonly checkpointIdInput: string;
```

- *Type:* string

---

##### `containSystemDiskInput`<sup>Optional</sup> <a name="containSystemDiskInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.containSystemDiskInput"></a>

```typescript
public readonly containSystemDiskInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expiredAtInput`<sup>Optional</sup> <a name="expiredAtInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.expiredAtInput"></a>

```typescript
public readonly expiredAtInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.imageTypeInput"></a>

```typescript
public readonly imageTypeInput: string;
```

- *Type:* string

---

##### `incrementalInput`<sup>Optional</sup> <a name="incrementalInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.incrementalInput"></a>

```typescript
public readonly incrementalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.providerIdInput"></a>

```typescript
public readonly providerIdInput: string;
```

- *Type:* string

---

##### `resourceAzInput`<sup>Optional</sup> <a name="resourceAzInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceAzInput"></a>

```typescript
public readonly resourceAzInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `resourceSizeInput`<sup>Optional</sup> <a name="resourceSizeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceSizeInput"></a>

```typescript
public readonly resourceSizeInput: number;
```

- *Type:* number

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `supportedRestoreModeInput`<sup>Optional</sup> <a name="supportedRestoreModeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportedRestoreModeInput"></a>

```typescript
public readonly supportedRestoreModeInput: string;
```

- *Type:* string

---

##### `supportLldInput`<sup>Optional</sup> <a name="supportLldInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportLldInput"></a>

```typescript
public readonly supportLldInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `systemDiskInput`<sup>Optional</sup> <a name="systemDiskInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.systemDiskInput"></a>

```typescript
public readonly systemDiskInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.updatedAtInput"></a>

```typescript
public readonly updatedAtInput: string;
```

- *Type:* string

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `autoTrigger`<sup>Required</sup> <a name="autoTrigger" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.autoTrigger"></a>

```typescript
public readonly autoTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bootable`<sup>Required</sup> <a name="bootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.bootable"></a>

```typescript
public readonly bootable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checkpointId`<sup>Required</sup> <a name="checkpointId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.checkpointId"></a>

```typescript
public readonly checkpointId: string;
```

- *Type:* string

---

##### `containSystemDisk`<sup>Required</sup> <a name="containSystemDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.containSystemDisk"></a>

```typescript
public readonly containSystemDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expiredAt`<sup>Required</sup> <a name="expiredAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.expiredAt"></a>

```typescript
public readonly expiredAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `incremental`<sup>Required</sup> <a name="incremental" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.incremental"></a>

```typescript
public readonly incremental: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

---

##### `resourceAz`<sup>Required</sup> <a name="resourceAz" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceAz"></a>

```typescript
public readonly resourceAz: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceSize`<sup>Required</sup> <a name="resourceSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceSize"></a>

```typescript
public readonly resourceSize: number;
```

- *Type:* number

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `supportedRestoreMode`<sup>Required</sup> <a name="supportedRestoreMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportedRestoreMode"></a>

```typescript
public readonly supportedRestoreMode: string;
```

- *Type:* string

---

##### `supportLld`<sup>Required</sup> <a name="supportLld" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportLld"></a>

```typescript
public readonly supportLld: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `systemDisk`<sup>Required</sup> <a name="systemDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.systemDisk"></a>

```typescript
public readonly systemDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCbrBackupV3Config <a name="DataOpentelekomcloudCbrBackupV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudCbrBackupV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudCbrBackupV3Config: dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.autoTrigger">autoTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#auto_trigger DataOpentelekomcloudCbrBackupV3#auto_trigger}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.bootable">bootable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#bootable DataOpentelekomcloudCbrBackupV3#bootable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.checkpointId">checkpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#checkpoint_id DataOpentelekomcloudCbrBackupV3#checkpoint_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.containSystemDisk">containSystemDisk</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#contain_system_disk DataOpentelekomcloudCbrBackupV3#contain_system_disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.createdAt">createdAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#created_at DataOpentelekomcloudCbrBackupV3#created_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#description DataOpentelekomcloudCbrBackupV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#encrypted DataOpentelekomcloudCbrBackupV3#encrypted}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.expiredAt">expiredAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#expired_at DataOpentelekomcloudCbrBackupV3#expired_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#id DataOpentelekomcloudCbrBackupV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.imageType">imageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#image_type DataOpentelekomcloudCbrBackupV3#image_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.incremental">incremental</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#incremental DataOpentelekomcloudCbrBackupV3#incremental}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#name DataOpentelekomcloudCbrBackupV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.parentId">parentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#parent_id DataOpentelekomcloudCbrBackupV3#parent_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#project_id DataOpentelekomcloudCbrBackupV3#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.providerId">providerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#provider_id DataOpentelekomcloudCbrBackupV3#provider_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceAz">resourceAz</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#resource_az DataOpentelekomcloudCbrBackupV3#resource_az}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#resource_id DataOpentelekomcloudCbrBackupV3#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceName">resourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#resource_name DataOpentelekomcloudCbrBackupV3#resource_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceSize">resourceSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#resource_size DataOpentelekomcloudCbrBackupV3#resource_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#resource_type DataOpentelekomcloudCbrBackupV3#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#snapshot_id DataOpentelekomcloudCbrBackupV3#snapshot_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#status DataOpentelekomcloudCbrBackupV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.supportedRestoreMode">supportedRestoreMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#supported_restore_mode DataOpentelekomcloudCbrBackupV3#supported_restore_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.supportLld">supportLld</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#support_lld DataOpentelekomcloudCbrBackupV3#support_lld}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.systemDisk">systemDisk</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#system_disk DataOpentelekomcloudCbrBackupV3#system_disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.updatedAt">updatedAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#updated_at DataOpentelekomcloudCbrBackupV3#updated_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#vault_id DataOpentelekomcloudCbrBackupV3#vault_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoTrigger`<sup>Optional</sup> <a name="autoTrigger" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.autoTrigger"></a>

```typescript
public readonly autoTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#auto_trigger DataOpentelekomcloudCbrBackupV3#auto_trigger}.

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.bootable"></a>

```typescript
public readonly bootable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#bootable DataOpentelekomcloudCbrBackupV3#bootable}.

---

##### `checkpointId`<sup>Optional</sup> <a name="checkpointId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.checkpointId"></a>

```typescript
public readonly checkpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#checkpoint_id DataOpentelekomcloudCbrBackupV3#checkpoint_id}.

---

##### `containSystemDisk`<sup>Optional</sup> <a name="containSystemDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.containSystemDisk"></a>

```typescript
public readonly containSystemDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#contain_system_disk DataOpentelekomcloudCbrBackupV3#contain_system_disk}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#created_at DataOpentelekomcloudCbrBackupV3#created_at}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#description DataOpentelekomcloudCbrBackupV3#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#encrypted DataOpentelekomcloudCbrBackupV3#encrypted}.

---

##### `expiredAt`<sup>Optional</sup> <a name="expiredAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.expiredAt"></a>

```typescript
public readonly expiredAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#expired_at DataOpentelekomcloudCbrBackupV3#expired_at}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#id DataOpentelekomcloudCbrBackupV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#image_type DataOpentelekomcloudCbrBackupV3#image_type}.

---

##### `incremental`<sup>Optional</sup> <a name="incremental" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.incremental"></a>

```typescript
public readonly incremental: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#incremental DataOpentelekomcloudCbrBackupV3#incremental}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#name DataOpentelekomcloudCbrBackupV3#name}.

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#parent_id DataOpentelekomcloudCbrBackupV3#parent_id}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#project_id DataOpentelekomcloudCbrBackupV3#project_id}.

---

##### `providerId`<sup>Optional</sup> <a name="providerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#provider_id DataOpentelekomcloudCbrBackupV3#provider_id}.

---

##### `resourceAz`<sup>Optional</sup> <a name="resourceAz" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceAz"></a>

```typescript
public readonly resourceAz: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#resource_az DataOpentelekomcloudCbrBackupV3#resource_az}.

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#resource_id DataOpentelekomcloudCbrBackupV3#resource_id}.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#resource_name DataOpentelekomcloudCbrBackupV3#resource_name}.

---

##### `resourceSize`<sup>Optional</sup> <a name="resourceSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceSize"></a>

```typescript
public readonly resourceSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#resource_size DataOpentelekomcloudCbrBackupV3#resource_size}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#resource_type DataOpentelekomcloudCbrBackupV3#resource_type}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#snapshot_id DataOpentelekomcloudCbrBackupV3#snapshot_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#status DataOpentelekomcloudCbrBackupV3#status}.

---

##### `supportedRestoreMode`<sup>Optional</sup> <a name="supportedRestoreMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.supportedRestoreMode"></a>

```typescript
public readonly supportedRestoreMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#supported_restore_mode DataOpentelekomcloudCbrBackupV3#supported_restore_mode}.

---

##### `supportLld`<sup>Optional</sup> <a name="supportLld" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.supportLld"></a>

```typescript
public readonly supportLld: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#support_lld DataOpentelekomcloudCbrBackupV3#support_lld}.

---

##### `systemDisk`<sup>Optional</sup> <a name="systemDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.systemDisk"></a>

```typescript
public readonly systemDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#system_disk DataOpentelekomcloudCbrBackupV3#system_disk}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#updated_at DataOpentelekomcloudCbrBackupV3#updated_at}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.14/docs/data-sources/cbr_backup_v3#vault_id DataOpentelekomcloudCbrBackupV3#vault_id}.

---



