# `opentelekomcloud_dcs_instance_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_dcs_instance_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1).

# `dcsInstanceV1` Submodule <a name="`dcsInstanceV1` Submodule" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcsInstanceV1 <a name="DcsInstanceV1" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1 opentelekomcloud_dcs_instance_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcsInstanceV1(Construct Scope, string Id, DcsInstanceV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config">DcsInstanceV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config">DcsInstanceV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putBackupPolicy">PutBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putWhitelist">PutWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupAt">ResetBackupAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupPolicy">ResetBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupType">ResetBackupType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBeginAt">ResetBeginAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetEnableWhitelist">ResetEnableWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetMaintainBegin">ResetMaintainBegin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetMaintainEnd">ResetMaintainEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetPeriodType">ResetPeriodType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetSaveDays">ResetSaveDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetSecurityGroupId">ResetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetWhitelist">ResetWhitelist</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutBackupPolicy` <a name="PutBackupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putBackupPolicy"></a>

```csharp
private void PutBackupPolicy(DcsInstanceV1BackupPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a>

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putConfiguration"></a>

```csharp
private void PutConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putTimeouts"></a>

```csharp
private void PutTimeouts(DcsInstanceV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a>

---

##### `PutWhitelist` <a name="PutWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putWhitelist"></a>

```csharp
private void PutWhitelist(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putWhitelist.parameter.value"></a>

- *Type:* object

---

##### `ResetBackupAt` <a name="ResetBackupAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupAt"></a>

```csharp
private void ResetBackupAt()
```

##### `ResetBackupPolicy` <a name="ResetBackupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupPolicy"></a>

```csharp
private void ResetBackupPolicy()
```

##### `ResetBackupType` <a name="ResetBackupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupType"></a>

```csharp
private void ResetBackupType()
```

##### `ResetBeginAt` <a name="ResetBeginAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBeginAt"></a>

```csharp
private void ResetBeginAt()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableWhitelist` <a name="ResetEnableWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetEnableWhitelist"></a>

```csharp
private void ResetEnableWhitelist()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaintainBegin` <a name="ResetMaintainBegin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetMaintainBegin"></a>

```csharp
private void ResetMaintainBegin()
```

##### `ResetMaintainEnd` <a name="ResetMaintainEnd" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetMaintainEnd"></a>

```csharp
private void ResetMaintainEnd()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPeriodType` <a name="ResetPeriodType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetPeriodType"></a>

```csharp
private void ResetPeriodType()
```

##### `ResetSaveDays` <a name="ResetSaveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetSaveDays"></a>

```csharp
private void ResetSaveDays()
```

##### `ResetSecurityGroupId` <a name="ResetSecurityGroupId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetSecurityGroupId"></a>

```csharp
private void ResetSecurityGroupId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWhitelist` <a name="ResetWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetWhitelist"></a>

```csharp
private void ResetWhitelist()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DcsInstanceV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DcsInstanceV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DcsInstanceV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference">DcsInstanceV1BackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList">DcsInstanceV1ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.internalVersion">InternalVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maxMemory">MaxMemory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.noPasswordAccess">NoPasswordAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.orderId">OrderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.resourceSpecCode">ResourceSpecCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupName">SecurityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetName">SubnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference">DcsInstanceV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.usedMemory">UsedMemory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcName">VpcName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.whitelist">Whitelist</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList">DcsInstanceV1WhitelistStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.availableZonesInput">AvailableZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupAtInput">BackupAtInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupPolicyInput">BackupPolicyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupTypeInput">BackupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.beginAtInput">BeginAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.capacityInput">CapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.configurationInput">ConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.enableWhitelistInput">EnableWhitelistInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainBeginInput">MaintainBeginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainEndInput">MaintainEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.periodTypeInput">PeriodTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.saveDaysInput">SaveDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.whitelistInput">WhitelistInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.availableZones">AvailableZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupAt">BackupAt</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupType">BackupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.beginAt">BeginAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.enableWhitelist">EnableWhitelist</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainBegin">MaintainBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainEnd">MaintainEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.periodType">PeriodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.saveDays">SaveDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackupPolicy`<sup>Required</sup> <a name="BackupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupPolicy"></a>

```csharp
public DcsInstanceV1BackupPolicyOutputReference BackupPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference">DcsInstanceV1BackupPolicyOutputReference</a>

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.configuration"></a>

```csharp
public DcsInstanceV1ConfigurationList Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList">DcsInstanceV1ConfigurationList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `InternalVersion`<sup>Required</sup> <a name="InternalVersion" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.internalVersion"></a>

```csharp
public string InternalVersion { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `MaxMemory`<sup>Required</sup> <a name="MaxMemory" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maxMemory"></a>

```csharp
public double MaxMemory { get; }
```

- *Type:* double

---

##### `NoPasswordAccess`<sup>Required</sup> <a name="NoPasswordAccess" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.noPasswordAccess"></a>

```csharp
public string NoPasswordAccess { get; }
```

- *Type:* string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.orderId"></a>

```csharp
public string OrderId { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ResourceSpecCode`<sup>Required</sup> <a name="ResourceSpecCode" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.resourceSpecCode"></a>

```csharp
public string ResourceSpecCode { get; }
```

- *Type:* string

---

##### `SecurityGroupName`<sup>Required</sup> <a name="SecurityGroupName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupName"></a>

```csharp
public string SecurityGroupName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetName"></a>

```csharp
public string SubnetName { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.timeouts"></a>

```csharp
public DcsInstanceV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference">DcsInstanceV1TimeoutsOutputReference</a>

---

##### `UsedMemory`<sup>Required</sup> <a name="UsedMemory" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.usedMemory"></a>

```csharp
public double UsedMemory { get; }
```

- *Type:* double

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `VpcName`<sup>Required</sup> <a name="VpcName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcName"></a>

```csharp
public string VpcName { get; }
```

- *Type:* string

---

##### `Whitelist`<sup>Required</sup> <a name="Whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.whitelist"></a>

```csharp
public DcsInstanceV1WhitelistStructList Whitelist { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList">DcsInstanceV1WhitelistStructList</a>

---

##### `AvailableZonesInput`<sup>Optional</sup> <a name="AvailableZonesInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.availableZonesInput"></a>

```csharp
public string[] AvailableZonesInput { get; }
```

- *Type:* string[]

---

##### `BackupAtInput`<sup>Optional</sup> <a name="BackupAtInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupAtInput"></a>

```csharp
public double[] BackupAtInput { get; }
```

- *Type:* double[]

---

##### `BackupPolicyInput`<sup>Optional</sup> <a name="BackupPolicyInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupPolicyInput"></a>

```csharp
public DcsInstanceV1BackupPolicy BackupPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a>

---

##### `BackupTypeInput`<sup>Optional</sup> <a name="BackupTypeInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupTypeInput"></a>

```csharp
public string BackupTypeInput { get; }
```

- *Type:* string

---

##### `BeginAtInput`<sup>Optional</sup> <a name="BeginAtInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.beginAtInput"></a>

```csharp
public string BeginAtInput { get; }
```

- *Type:* string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.capacityInput"></a>

```csharp
public double CapacityInput { get; }
```

- *Type:* double

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.configurationInput"></a>

```csharp
public object ConfigurationInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnableWhitelistInput`<sup>Optional</sup> <a name="EnableWhitelistInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.enableWhitelistInput"></a>

```csharp
public object EnableWhitelistInput { get; }
```

- *Type:* object

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaintainBeginInput`<sup>Optional</sup> <a name="MaintainBeginInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainBeginInput"></a>

```csharp
public string MaintainBeginInput { get; }
```

- *Type:* string

---

##### `MaintainEndInput`<sup>Optional</sup> <a name="MaintainEndInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainEndInput"></a>

```csharp
public string MaintainEndInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PeriodTypeInput`<sup>Optional</sup> <a name="PeriodTypeInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.periodTypeInput"></a>

```csharp
public string PeriodTypeInput { get; }
```

- *Type:* string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `SaveDaysInput`<sup>Optional</sup> <a name="SaveDaysInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.saveDaysInput"></a>

```csharp
public double SaveDaysInput { get; }
```

- *Type:* double

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupIdInput"></a>

```csharp
public string SecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `WhitelistInput`<sup>Optional</sup> <a name="WhitelistInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.whitelistInput"></a>

```csharp
public object WhitelistInput { get; }
```

- *Type:* object

---

##### `AvailableZones`<sup>Required</sup> <a name="AvailableZones" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.availableZones"></a>

```csharp
public string[] AvailableZones { get; }
```

- *Type:* string[]

---

##### `BackupAt`<sup>Required</sup> <a name="BackupAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupAt"></a>

```csharp
public double[] BackupAt { get; }
```

- *Type:* double[]

---

##### `BackupType`<sup>Required</sup> <a name="BackupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupType"></a>

```csharp
public string BackupType { get; }
```

- *Type:* string

---

##### `BeginAt`<sup>Required</sup> <a name="BeginAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.beginAt"></a>

```csharp
public string BeginAt { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnableWhitelist`<sup>Required</sup> <a name="EnableWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.enableWhitelist"></a>

```csharp
public object EnableWhitelist { get; }
```

- *Type:* object

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaintainBegin`<sup>Required</sup> <a name="MaintainBegin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainBegin"></a>

```csharp
public string MaintainBegin { get; }
```

- *Type:* string

---

##### `MaintainEnd`<sup>Required</sup> <a name="MaintainEnd" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainEnd"></a>

```csharp
public string MaintainEnd { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PeriodType`<sup>Required</sup> <a name="PeriodType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.periodType"></a>

```csharp
public string PeriodType { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `SaveDays`<sup>Required</sup> <a name="SaveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.saveDays"></a>

```csharp
public double SaveDays { get; }
```

- *Type:* double

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DcsInstanceV1BackupPolicy <a name="DcsInstanceV1BackupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcsInstanceV1BackupPolicy {
    double[] BackupAt,
    string BeginAt,
    string PeriodType,
    string BackupType = null,
    double SaveDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.backupAt">BackupAt</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.beginAt">BeginAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.periodType">PeriodType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.backupType">BackupType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.saveDays">SaveDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}. |

---

##### `BackupAt`<sup>Required</sup> <a name="BackupAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.backupAt"></a>

```csharp
public double[] BackupAt { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}.

---

##### `BeginAt`<sup>Required</sup> <a name="BeginAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.beginAt"></a>

```csharp
public string BeginAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}.

---

##### `PeriodType`<sup>Required</sup> <a name="PeriodType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.periodType"></a>

```csharp
public string PeriodType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}.

---

##### `BackupType`<sup>Optional</sup> <a name="BackupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.backupType"></a>

```csharp
public string BackupType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}.

---

##### `SaveDays`<sup>Optional</sup> <a name="SaveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.saveDays"></a>

```csharp
public double SaveDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}.

---

### DcsInstanceV1Config <a name="DcsInstanceV1Config" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcsInstanceV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AvailableZones,
    double Capacity,
    string Engine,
    string EngineVersion,
    string Name,
    string ProductId,
    string SubnetId,
    string VpcId,
    double[] BackupAt = null,
    DcsInstanceV1BackupPolicy BackupPolicy = null,
    string BackupType = null,
    string BeginAt = null,
    object Configuration = null,
    string Description = null,
    object EnableWhitelist = null,
    string Id = null,
    string MaintainBegin = null,
    string MaintainEnd = null,
    string Password = null,
    string PeriodType = null,
    double SaveDays = null,
    string SecurityGroupId = null,
    DcsInstanceV1Timeouts Timeouts = null,
    object Whitelist = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.availableZones">AvailableZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#available_zones DcsInstanceV1#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.capacity">Capacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#capacity DcsInstanceV1#capacity}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#engine DcsInstanceV1#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#engine_version DcsInstanceV1#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#name DcsInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.productId">ProductId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#product_id DcsInstanceV1#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#subnet_id DcsInstanceV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#vpc_id DcsInstanceV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupAt">BackupAt</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a></code> | backup_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupType">BackupType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.beginAt">BeginAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.configuration">Configuration</a></code> | <code>object</code> | configuration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#description DcsInstanceV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.enableWhitelist">EnableWhitelist</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#enable_whitelist DcsInstanceV1#enable_whitelist}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#id DcsInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.maintainBegin">MaintainBegin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#maintain_begin DcsInstanceV1#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.maintainEnd">MaintainEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#maintain_end DcsInstanceV1#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#password DcsInstanceV1#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.periodType">PeriodType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.saveDays">SaveDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#security_group_id DcsInstanceV1#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.whitelist">Whitelist</a></code> | <code>object</code> | whitelist block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailableZones`<sup>Required</sup> <a name="AvailableZones" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.availableZones"></a>

```csharp
public string[] AvailableZones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#available_zones DcsInstanceV1#available_zones}.

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.capacity"></a>

```csharp
public double Capacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#capacity DcsInstanceV1#capacity}.

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#engine DcsInstanceV1#engine}.

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#engine_version DcsInstanceV1#engine_version}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#name DcsInstanceV1#name}.

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#product_id DcsInstanceV1#product_id}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#subnet_id DcsInstanceV1#subnet_id}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#vpc_id DcsInstanceV1#vpc_id}.

---

##### `BackupAt`<sup>Optional</sup> <a name="BackupAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupAt"></a>

```csharp
public double[] BackupAt { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}.

---

##### `BackupPolicy`<sup>Optional</sup> <a name="BackupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupPolicy"></a>

```csharp
public DcsInstanceV1BackupPolicy BackupPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#backup_policy DcsInstanceV1#backup_policy}

---

##### `BackupType`<sup>Optional</sup> <a name="BackupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupType"></a>

```csharp
public string BackupType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}.

---

##### `BeginAt`<sup>Optional</sup> <a name="BeginAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.beginAt"></a>

```csharp
public string BeginAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.configuration"></a>

```csharp
public object Configuration { get; set; }
```

- *Type:* object

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#configuration DcsInstanceV1#configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#description DcsInstanceV1#description}.

---

##### `EnableWhitelist`<sup>Optional</sup> <a name="EnableWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.enableWhitelist"></a>

```csharp
public object EnableWhitelist { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#enable_whitelist DcsInstanceV1#enable_whitelist}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#id DcsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintainBegin`<sup>Optional</sup> <a name="MaintainBegin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.maintainBegin"></a>

```csharp
public string MaintainBegin { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#maintain_begin DcsInstanceV1#maintain_begin}.

---

##### `MaintainEnd`<sup>Optional</sup> <a name="MaintainEnd" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.maintainEnd"></a>

```csharp
public string MaintainEnd { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#maintain_end DcsInstanceV1#maintain_end}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#password DcsInstanceV1#password}.

---

##### `PeriodType`<sup>Optional</sup> <a name="PeriodType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.periodType"></a>

```csharp
public string PeriodType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}.

---

##### `SaveDays`<sup>Optional</sup> <a name="SaveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.saveDays"></a>

```csharp
public double SaveDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}.

---

##### `SecurityGroupId`<sup>Optional</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#security_group_id DcsInstanceV1#security_group_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.timeouts"></a>

```csharp
public DcsInstanceV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#timeouts DcsInstanceV1#timeouts}

---

##### `Whitelist`<sup>Optional</sup> <a name="Whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.whitelist"></a>

```csharp
public object Whitelist { get; set; }
```

- *Type:* object

whitelist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#whitelist DcsInstanceV1#whitelist}

---

### DcsInstanceV1Configuration <a name="DcsInstanceV1Configuration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcsInstanceV1Configuration {
    string ParameterId,
    string ParameterName,
    string ParameterValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterId">ParameterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#parameter_id DcsInstanceV1#parameter_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterName">ParameterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#parameter_name DcsInstanceV1#parameter_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterValue">ParameterValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#parameter_value DcsInstanceV1#parameter_value}. |

---

##### `ParameterId`<sup>Required</sup> <a name="ParameterId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterId"></a>

```csharp
public string ParameterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#parameter_id DcsInstanceV1#parameter_id}.

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterName"></a>

```csharp
public string ParameterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#parameter_name DcsInstanceV1#parameter_name}.

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterValue"></a>

```csharp
public string ParameterValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#parameter_value DcsInstanceV1#parameter_value}.

---

### DcsInstanceV1Timeouts <a name="DcsInstanceV1Timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcsInstanceV1Timeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#create DcsInstanceV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#delete DcsInstanceV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#update DcsInstanceV1#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#create DcsInstanceV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#delete DcsInstanceV1#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#update DcsInstanceV1#update}.

---

### DcsInstanceV1WhitelistStruct <a name="DcsInstanceV1WhitelistStruct" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcsInstanceV1WhitelistStruct {
    string GroupName,
    string[] IpList
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct.property.groupName">GroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#group_name DcsInstanceV1#group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct.property.ipList">IpList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#ip_list DcsInstanceV1#ip_list}. |

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#group_name DcsInstanceV1#group_name}.

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct.property.ipList"></a>

```csharp
public string[] IpList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/dcs_instance_v1#ip_list DcsInstanceV1#ip_list}.

---

## Classes <a name="Classes" id="Classes"></a>

### DcsInstanceV1BackupPolicyOutputReference <a name="DcsInstanceV1BackupPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcsInstanceV1BackupPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resetBackupType">ResetBackupType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resetSaveDays">ResetSaveDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupType` <a name="ResetBackupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resetBackupType"></a>

```csharp
private void ResetBackupType()
```

##### `ResetSaveDays` <a name="ResetSaveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resetSaveDays"></a>

```csharp
private void ResetSaveDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupAtInput">BackupAtInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupTypeInput">BackupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.beginAtInput">BeginAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.periodTypeInput">PeriodTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.saveDaysInput">SaveDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupAt">BackupAt</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupType">BackupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.beginAt">BeginAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.periodType">PeriodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.saveDays">SaveDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupAtInput`<sup>Optional</sup> <a name="BackupAtInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupAtInput"></a>

```csharp
public double[] BackupAtInput { get; }
```

- *Type:* double[]

---

##### `BackupTypeInput`<sup>Optional</sup> <a name="BackupTypeInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupTypeInput"></a>

```csharp
public string BackupTypeInput { get; }
```

- *Type:* string

---

##### `BeginAtInput`<sup>Optional</sup> <a name="BeginAtInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.beginAtInput"></a>

```csharp
public string BeginAtInput { get; }
```

- *Type:* string

---

##### `PeriodTypeInput`<sup>Optional</sup> <a name="PeriodTypeInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.periodTypeInput"></a>

```csharp
public string PeriodTypeInput { get; }
```

- *Type:* string

---

##### `SaveDaysInput`<sup>Optional</sup> <a name="SaveDaysInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.saveDaysInput"></a>

```csharp
public double SaveDaysInput { get; }
```

- *Type:* double

---

##### `BackupAt`<sup>Required</sup> <a name="BackupAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupAt"></a>

```csharp
public double[] BackupAt { get; }
```

- *Type:* double[]

---

##### `BackupType`<sup>Required</sup> <a name="BackupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupType"></a>

```csharp
public string BackupType { get; }
```

- *Type:* string

---

##### `BeginAt`<sup>Required</sup> <a name="BeginAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.beginAt"></a>

```csharp
public string BeginAt { get; }
```

- *Type:* string

---

##### `PeriodType`<sup>Required</sup> <a name="PeriodType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.periodType"></a>

```csharp
public string PeriodType { get; }
```

- *Type:* string

---

##### `SaveDays`<sup>Required</sup> <a name="SaveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.saveDays"></a>

```csharp
public double SaveDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.internalValue"></a>

```csharp
public DcsInstanceV1BackupPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a>

---


### DcsInstanceV1ConfigurationList <a name="DcsInstanceV1ConfigurationList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcsInstanceV1ConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.get"></a>

```csharp
private DcsInstanceV1ConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DcsInstanceV1ConfigurationOutputReference <a name="DcsInstanceV1ConfigurationOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcsInstanceV1ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterIdInput">ParameterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterId">ParameterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterName">ParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterValue">ParameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParameterIdInput`<sup>Optional</sup> <a name="ParameterIdInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterIdInput"></a>

```csharp
public string ParameterIdInput { get; }
```

- *Type:* string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterNameInput"></a>

```csharp
public string ParameterNameInput { get; }
```

- *Type:* string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterValueInput"></a>

```csharp
public string ParameterValueInput { get; }
```

- *Type:* string

---

##### `ParameterId`<sup>Required</sup> <a name="ParameterId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterId"></a>

```csharp
public string ParameterId { get; }
```

- *Type:* string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterName"></a>

```csharp
public string ParameterName { get; }
```

- *Type:* string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterValue"></a>

```csharp
public string ParameterValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DcsInstanceV1TimeoutsOutputReference <a name="DcsInstanceV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcsInstanceV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DcsInstanceV1WhitelistStructList <a name="DcsInstanceV1WhitelistStructList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcsInstanceV1WhitelistStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.get"></a>

```csharp
private DcsInstanceV1WhitelistStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DcsInstanceV1WhitelistStructOutputReference <a name="DcsInstanceV1WhitelistStructOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DcsInstanceV1WhitelistStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.ipListInput">IpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.ipList">IpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.ipListInput"></a>

```csharp
public string[] IpListInput { get; }
```

- *Type:* string[]

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.ipList"></a>

```csharp
public string[] IpList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



