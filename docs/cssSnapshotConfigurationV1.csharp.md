# `opentelekomcloud_css_snapshot_configuration_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_css_snapshot_configuration_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1).

# `cssSnapshotConfigurationV1` Submodule <a name="`cssSnapshotConfigurationV1` Submodule" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CssSnapshotConfigurationV1 <a name="CssSnapshotConfigurationV1" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1 opentelekomcloud_css_snapshot_configuration_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CssSnapshotConfigurationV1(Construct Scope, string Id, CssSnapshotConfigurationV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config">CssSnapshotConfigurationV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config">CssSnapshotConfigurationV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putCreationPolicy">PutCreationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetAutomatic">ResetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetCreationPolicy">ResetCreationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putConfiguration"></a>

```csharp
private void PutConfiguration(CssSnapshotConfigurationV1Configuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a>

---

##### `PutCreationPolicy` <a name="PutCreationPolicy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putCreationPolicy"></a>

```csharp
private void PutCreationPolicy(CssSnapshotConfigurationV1CreationPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putCreationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putTimeouts"></a>

```csharp
private void PutTimeouts(CssSnapshotConfigurationV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a>

---

##### `ResetAutomatic` <a name="ResetAutomatic" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetAutomatic"></a>

```csharp
private void ResetAutomatic()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetCreationPolicy` <a name="ResetCreationPolicy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetCreationPolicy"></a>

```csharp
private void ResetCreationPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CssSnapshotConfigurationV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CssSnapshotConfigurationV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CssSnapshotConfigurationV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CssSnapshotConfigurationV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CssSnapshotConfigurationV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CssSnapshotConfigurationV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CssSnapshotConfigurationV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CssSnapshotConfigurationV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CssSnapshotConfigurationV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.basePath">BasePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference">CssSnapshotConfigurationV1ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.creationPolicy">CreationPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference">CssSnapshotConfigurationV1CreationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference">CssSnapshotConfigurationV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.automaticInput">AutomaticInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.configurationInput">ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.creationPolicyInput">CreationPolicyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.automatic">Automatic</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BasePath`<sup>Required</sup> <a name="BasePath" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.basePath"></a>

```csharp
public string BasePath { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.configuration"></a>

```csharp
public CssSnapshotConfigurationV1ConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference">CssSnapshotConfigurationV1ConfigurationOutputReference</a>

---

##### `CreationPolicy`<sup>Required</sup> <a name="CreationPolicy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.creationPolicy"></a>

```csharp
public CssSnapshotConfigurationV1CreationPolicyOutputReference CreationPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference">CssSnapshotConfigurationV1CreationPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.timeouts"></a>

```csharp
public CssSnapshotConfigurationV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference">CssSnapshotConfigurationV1TimeoutsOutputReference</a>

---

##### `AutomaticInput`<sup>Optional</sup> <a name="AutomaticInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.automaticInput"></a>

```csharp
public object AutomaticInput { get; }
```

- *Type:* object

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.configurationInput"></a>

```csharp
public CssSnapshotConfigurationV1Configuration ConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a>

---

##### `CreationPolicyInput`<sup>Optional</sup> <a name="CreationPolicyInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.creationPolicyInput"></a>

```csharp
public CssSnapshotConfigurationV1CreationPolicy CreationPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.automatic"></a>

```csharp
public object Automatic { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CssSnapshotConfigurationV1Config <a name="CssSnapshotConfigurationV1Config" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CssSnapshotConfigurationV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    object Automatic = null,
    CssSnapshotConfigurationV1Configuration Configuration = null,
    CssSnapshotConfigurationV1CreationPolicy CreationPolicy = null,
    string Id = null,
    CssSnapshotConfigurationV1Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#cluster_id CssSnapshotConfigurationV1#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.automatic">Automatic</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#automatic CssSnapshotConfigurationV1#automatic}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.creationPolicy">CreationPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a></code> | creation_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#id CssSnapshotConfigurationV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#cluster_id CssSnapshotConfigurationV1#cluster_id}.

---

##### `Automatic`<sup>Optional</sup> <a name="Automatic" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.automatic"></a>

```csharp
public object Automatic { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#automatic CssSnapshotConfigurationV1#automatic}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.configuration"></a>

```csharp
public CssSnapshotConfigurationV1Configuration Configuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#configuration CssSnapshotConfigurationV1#configuration}

---

##### `CreationPolicy`<sup>Optional</sup> <a name="CreationPolicy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.creationPolicy"></a>

```csharp
public CssSnapshotConfigurationV1CreationPolicy CreationPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a>

creation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#creation_policy CssSnapshotConfigurationV1#creation_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#id CssSnapshotConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Config.property.timeouts"></a>

```csharp
public CssSnapshotConfigurationV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts">CssSnapshotConfigurationV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#timeouts CssSnapshotConfigurationV1#timeouts}

---

### CssSnapshotConfigurationV1Configuration <a name="CssSnapshotConfigurationV1Configuration" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CssSnapshotConfigurationV1Configuration {
    string Agency,
    string Bucket,
    string KmsId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.agency">Agency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#agency CssSnapshotConfigurationV1#agency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#bucket CssSnapshotConfigurationV1#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.kmsId">KmsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#kms_id CssSnapshotConfigurationV1#kms_id}. |

---

##### `Agency`<sup>Required</sup> <a name="Agency" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.agency"></a>

```csharp
public string Agency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#agency CssSnapshotConfigurationV1#agency}.

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#bucket CssSnapshotConfigurationV1#bucket}.

---

##### `KmsId`<sup>Optional</sup> <a name="KmsId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration.property.kmsId"></a>

```csharp
public string KmsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#kms_id CssSnapshotConfigurationV1#kms_id}.

---

### CssSnapshotConfigurationV1CreationPolicy <a name="CssSnapshotConfigurationV1CreationPolicy" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CssSnapshotConfigurationV1CreationPolicy {
    object Enable,
    double Keepday,
    string Period,
    string Prefix,
    object DeleteAuto = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.enable">Enable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#enable CssSnapshotConfigurationV1#enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.keepday">Keepday</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#keepday CssSnapshotConfigurationV1#keepday}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.period">Period</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#period CssSnapshotConfigurationV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#prefix CssSnapshotConfigurationV1#prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.deleteAuto">DeleteAuto</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#delete_auto CssSnapshotConfigurationV1#delete_auto}. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#enable CssSnapshotConfigurationV1#enable}.

---

##### `Keepday`<sup>Required</sup> <a name="Keepday" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.keepday"></a>

```csharp
public double Keepday { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#keepday CssSnapshotConfigurationV1#keepday}.

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#period CssSnapshotConfigurationV1#period}.

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#prefix CssSnapshotConfigurationV1#prefix}.

---

##### `DeleteAuto`<sup>Optional</sup> <a name="DeleteAuto" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy.property.deleteAuto"></a>

```csharp
public object DeleteAuto { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#delete_auto CssSnapshotConfigurationV1#delete_auto}.

---

### CssSnapshotConfigurationV1Timeouts <a name="CssSnapshotConfigurationV1Timeouts" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CssSnapshotConfigurationV1Timeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#create CssSnapshotConfigurationV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#update CssSnapshotConfigurationV1#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#create CssSnapshotConfigurationV1#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/css_snapshot_configuration_v1#update CssSnapshotConfigurationV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CssSnapshotConfigurationV1ConfigurationOutputReference <a name="CssSnapshotConfigurationV1ConfigurationOutputReference" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CssSnapshotConfigurationV1ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.resetKmsId">ResetKmsId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsId` <a name="ResetKmsId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.resetKmsId"></a>

```csharp
private void ResetKmsId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.agencyInput">AgencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.kmsIdInput">KmsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.agency">Agency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.kmsId">KmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgencyInput`<sup>Optional</sup> <a name="AgencyInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.agencyInput"></a>

```csharp
public string AgencyInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `KmsIdInput`<sup>Optional</sup> <a name="KmsIdInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.kmsIdInput"></a>

```csharp
public string KmsIdInput { get; }
```

- *Type:* string

---

##### `Agency`<sup>Required</sup> <a name="Agency" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.agency"></a>

```csharp
public string Agency { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `KmsId`<sup>Required</sup> <a name="KmsId" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.kmsId"></a>

```csharp
public string KmsId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1ConfigurationOutputReference.property.internalValue"></a>

```csharp
public CssSnapshotConfigurationV1Configuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1Configuration">CssSnapshotConfigurationV1Configuration</a>

---


### CssSnapshotConfigurationV1CreationPolicyOutputReference <a name="CssSnapshotConfigurationV1CreationPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CssSnapshotConfigurationV1CreationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.resetDeleteAuto">ResetDeleteAuto</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteAuto` <a name="ResetDeleteAuto" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.resetDeleteAuto"></a>

```csharp
private void ResetDeleteAuto()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.deleteAutoInput">DeleteAutoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.keepdayInput">KeepdayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.deleteAuto">DeleteAuto</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.keepday">Keepday</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteAutoInput`<sup>Optional</sup> <a name="DeleteAutoInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.deleteAutoInput"></a>

```csharp
public object DeleteAutoInput { get; }
```

- *Type:* object

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `KeepdayInput`<sup>Optional</sup> <a name="KeepdayInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.keepdayInput"></a>

```csharp
public double KeepdayInput { get; }
```

- *Type:* double

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `DeleteAuto`<sup>Required</sup> <a name="DeleteAuto" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.deleteAuto"></a>

```csharp
public object DeleteAuto { get; }
```

- *Type:* object

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `Keepday`<sup>Required</sup> <a name="Keepday" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.keepday"></a>

```csharp
public double Keepday { get; }
```

- *Type:* double

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicyOutputReference.property.internalValue"></a>

```csharp
public CssSnapshotConfigurationV1CreationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1CreationPolicy">CssSnapshotConfigurationV1CreationPolicy</a>

---


### CssSnapshotConfigurationV1TimeoutsOutputReference <a name="CssSnapshotConfigurationV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CssSnapshotConfigurationV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cssSnapshotConfigurationV1.CssSnapshotConfigurationV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



