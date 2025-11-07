# `obsBucketAcl` Submodule <a name="`obsBucketAcl` Submodule" id="@cdktf/provider-opentelekomcloud.obsBucketAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObsBucketAcl <a name="ObsBucketAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl opentelekomcloud_obs_bucket_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketAcl(Construct Scope, string Id, ObsBucketAclConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig">ObsBucketAclConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig">ObsBucketAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putAccountPermission">PutAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putLogDeliveryUserPermission">PutLogDeliveryUserPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putOwnerPermission">PutOwnerPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putPublicPermission">PutPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetAccountPermission">ResetAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetLogDeliveryUserPermission">ResetLogDeliveryUserPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOwnerPermission">ResetOwnerPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetPublicPermission">ResetPublicPermission</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccountPermission` <a name="PutAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putAccountPermission"></a>

```csharp
private void PutAccountPermission(IResolvable|ObsBucketAclAccountPermission[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putAccountPermission.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>[]

---

##### `PutLogDeliveryUserPermission` <a name="PutLogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putLogDeliveryUserPermission"></a>

```csharp
private void PutLogDeliveryUserPermission(ObsBucketAclLogDeliveryUserPermission Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putLogDeliveryUserPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

---

##### `PutOwnerPermission` <a name="PutOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putOwnerPermission"></a>

```csharp
private void PutOwnerPermission(ObsBucketAclOwnerPermission Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putOwnerPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

---

##### `PutPublicPermission` <a name="PutPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putPublicPermission"></a>

```csharp
private void PutPublicPermission(ObsBucketAclPublicPermission Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putPublicPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

---

##### `ResetAccountPermission` <a name="ResetAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetAccountPermission"></a>

```csharp
private void ResetAccountPermission()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogDeliveryUserPermission` <a name="ResetLogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetLogDeliveryUserPermission"></a>

```csharp
private void ResetLogDeliveryUserPermission()
```

##### `ResetOwnerPermission` <a name="ResetOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOwnerPermission"></a>

```csharp
private void ResetOwnerPermission()
```

##### `ResetPublicPermission` <a name="ResetPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetPublicPermission"></a>

```csharp
private void ResetPublicPermission()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObsBucketAcl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketAcl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketAcl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketAcl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ObsBucketAcl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ObsBucketAcl resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObsBucketAcl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObsBucketAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ObsBucketAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermission">AccountPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList">ObsBucketAclAccountPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermission">LogDeliveryUserPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference">ObsBucketAclLogDeliveryUserPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermission">OwnerPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference">ObsBucketAclOwnerPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermission">PublicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference">ObsBucketAclPublicPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermissionInput">AccountPermissionInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermissionInput">LogDeliveryUserPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermissionInput">OwnerPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermissionInput">PublicPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountPermission`<sup>Required</sup> <a name="AccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermission"></a>

```csharp
public ObsBucketAclAccountPermissionList AccountPermission { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList">ObsBucketAclAccountPermissionList</a>

---

##### `LogDeliveryUserPermission`<sup>Required</sup> <a name="LogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermission"></a>

```csharp
public ObsBucketAclLogDeliveryUserPermissionOutputReference LogDeliveryUserPermission { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference">ObsBucketAclLogDeliveryUserPermissionOutputReference</a>

---

##### `OwnerPermission`<sup>Required</sup> <a name="OwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermission"></a>

```csharp
public ObsBucketAclOwnerPermissionOutputReference OwnerPermission { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference">ObsBucketAclOwnerPermissionOutputReference</a>

---

##### `PublicPermission`<sup>Required</sup> <a name="PublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermission"></a>

```csharp
public ObsBucketAclPublicPermissionOutputReference PublicPermission { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference">ObsBucketAclPublicPermissionOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `AccountPermissionInput`<sup>Optional</sup> <a name="AccountPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermissionInput"></a>

```csharp
public IResolvable|ObsBucketAclAccountPermission[] AccountPermissionInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>[]

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogDeliveryUserPermissionInput`<sup>Optional</sup> <a name="LogDeliveryUserPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermissionInput"></a>

```csharp
public ObsBucketAclLogDeliveryUserPermission LogDeliveryUserPermissionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

---

##### `OwnerPermissionInput`<sup>Optional</sup> <a name="OwnerPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermissionInput"></a>

```csharp
public ObsBucketAclOwnerPermission OwnerPermissionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

---

##### `PublicPermissionInput`<sup>Optional</sup> <a name="PublicPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermissionInput"></a>

```csharp
public ObsBucketAclPublicPermission PublicPermissionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObsBucketAclAccountPermission <a name="ObsBucketAclAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketAclAccountPermission {
    string AccountId,
    string[] AccessToAcl = null,
    string[] AccessToBucket = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#account_id ObsBucketAcl#account_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToAcl">AccessToAcl</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToBucket">AccessToBucket</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#account_id ObsBucketAcl#account_id}.

---

##### `AccessToAcl`<sup>Optional</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToAcl"></a>

```csharp
public string[] AccessToAcl { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `AccessToBucket`<sup>Optional</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToBucket"></a>

```csharp
public string[] AccessToBucket { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

### ObsBucketAclConfig <a name="ObsBucketAclConfig" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketAclConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Bucket,
    IResolvable|ObsBucketAclAccountPermission[] AccountPermission = null,
    string Id = null,
    ObsBucketAclLogDeliveryUserPermission LogDeliveryUserPermission = null,
    ObsBucketAclOwnerPermission OwnerPermission = null,
    ObsBucketAclPublicPermission PublicPermission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#bucket ObsBucketAcl#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.accountPermission">AccountPermission</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>[]</code> | account_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#id ObsBucketAcl#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.logDeliveryUserPermission">LogDeliveryUserPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a></code> | log_delivery_user_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.ownerPermission">OwnerPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a></code> | owner_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.publicPermission">PublicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a></code> | public_permission block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#bucket ObsBucketAcl#bucket}.

---

##### `AccountPermission`<sup>Optional</sup> <a name="AccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.accountPermission"></a>

```csharp
public IResolvable|ObsBucketAclAccountPermission[] AccountPermission { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>[]

account_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#account_permission ObsBucketAcl#account_permission}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#id ObsBucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogDeliveryUserPermission`<sup>Optional</sup> <a name="LogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.logDeliveryUserPermission"></a>

```csharp
public ObsBucketAclLogDeliveryUserPermission LogDeliveryUserPermission { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

log_delivery_user_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#log_delivery_user_permission ObsBucketAcl#log_delivery_user_permission}

---

##### `OwnerPermission`<sup>Optional</sup> <a name="OwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.ownerPermission"></a>

```csharp
public ObsBucketAclOwnerPermission OwnerPermission { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

owner_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#owner_permission ObsBucketAcl#owner_permission}

---

##### `PublicPermission`<sup>Optional</sup> <a name="PublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.publicPermission"></a>

```csharp
public ObsBucketAclPublicPermission PublicPermission { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

public_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#public_permission ObsBucketAcl#public_permission}

---

### ObsBucketAclLogDeliveryUserPermission <a name="ObsBucketAclLogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketAclLogDeliveryUserPermission {
    string[] AccessToAcl = null,
    string[] AccessToBucket = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToAcl">AccessToAcl</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToBucket">AccessToBucket</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `AccessToAcl`<sup>Optional</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToAcl"></a>

```csharp
public string[] AccessToAcl { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `AccessToBucket`<sup>Optional</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToBucket"></a>

```csharp
public string[] AccessToBucket { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

### ObsBucketAclOwnerPermission <a name="ObsBucketAclOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketAclOwnerPermission {
    string[] AccessToAcl = null,
    string[] AccessToBucket = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToAcl">AccessToAcl</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToBucket">AccessToBucket</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `AccessToAcl`<sup>Optional</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToAcl"></a>

```csharp
public string[] AccessToAcl { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `AccessToBucket`<sup>Optional</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToBucket"></a>

```csharp
public string[] AccessToBucket { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

### ObsBucketAclPublicPermission <a name="ObsBucketAclPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketAclPublicPermission {
    string[] AccessToAcl = null,
    string[] AccessToBucket = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToAcl">AccessToAcl</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToBucket">AccessToBucket</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `AccessToAcl`<sup>Optional</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToAcl"></a>

```csharp
public string[] AccessToAcl { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `AccessToBucket`<sup>Optional</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToBucket"></a>

```csharp
public string[] AccessToBucket { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObsBucketAclAccountPermissionList <a name="ObsBucketAclAccountPermissionList" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketAclAccountPermissionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.get"></a>

```csharp
private ObsBucketAclAccountPermissionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.internalValue"></a>

```csharp
public IResolvable|ObsBucketAclAccountPermission[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>[]

---


### ObsBucketAclAccountPermissionOutputReference <a name="ObsBucketAclAccountPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketAclAccountPermissionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToAcl">ResetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToBucket">ResetAccessToBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToAcl` <a name="ResetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToAcl"></a>

```csharp
private void ResetAccessToAcl()
```

##### `ResetAccessToBucket` <a name="ResetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToBucket"></a>

```csharp
private void ResetAccessToBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAclInput">AccessToAclInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucketInput">AccessToBucketInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAcl">AccessToAcl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucket">AccessToBucket</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessToAclInput`<sup>Optional</sup> <a name="AccessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAclInput"></a>

```csharp
public string[] AccessToAclInput { get; }
```

- *Type:* string[]

---

##### `AccessToBucketInput`<sup>Optional</sup> <a name="AccessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucketInput"></a>

```csharp
public string[] AccessToBucketInput { get; }
```

- *Type:* string[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AccessToAcl`<sup>Required</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAcl"></a>

```csharp
public string[] AccessToAcl { get; }
```

- *Type:* string[]

---

##### `AccessToBucket`<sup>Required</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucket"></a>

```csharp
public string[] AccessToBucket { get; }
```

- *Type:* string[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObsBucketAclAccountPermission InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>

---


### ObsBucketAclLogDeliveryUserPermissionOutputReference <a name="ObsBucketAclLogDeliveryUserPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketAclLogDeliveryUserPermissionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToAcl">ResetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToBucket">ResetAccessToBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToAcl` <a name="ResetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToAcl"></a>

```csharp
private void ResetAccessToAcl()
```

##### `ResetAccessToBucket` <a name="ResetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToBucket"></a>

```csharp
private void ResetAccessToBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAclInput">AccessToAclInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucketInput">AccessToBucketInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAcl">AccessToAcl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucket">AccessToBucket</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessToAclInput`<sup>Optional</sup> <a name="AccessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAclInput"></a>

```csharp
public string[] AccessToAclInput { get; }
```

- *Type:* string[]

---

##### `AccessToBucketInput`<sup>Optional</sup> <a name="AccessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucketInput"></a>

```csharp
public string[] AccessToBucketInput { get; }
```

- *Type:* string[]

---

##### `AccessToAcl`<sup>Required</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAcl"></a>

```csharp
public string[] AccessToAcl { get; }
```

- *Type:* string[]

---

##### `AccessToBucket`<sup>Required</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucket"></a>

```csharp
public string[] AccessToBucket { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.internalValue"></a>

```csharp
public ObsBucketAclLogDeliveryUserPermission InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

---


### ObsBucketAclOwnerPermissionOutputReference <a name="ObsBucketAclOwnerPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketAclOwnerPermissionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToAcl">ResetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToBucket">ResetAccessToBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToAcl` <a name="ResetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToAcl"></a>

```csharp
private void ResetAccessToAcl()
```

##### `ResetAccessToBucket` <a name="ResetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToBucket"></a>

```csharp
private void ResetAccessToBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAclInput">AccessToAclInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucketInput">AccessToBucketInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAcl">AccessToAcl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucket">AccessToBucket</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessToAclInput`<sup>Optional</sup> <a name="AccessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAclInput"></a>

```csharp
public string[] AccessToAclInput { get; }
```

- *Type:* string[]

---

##### `AccessToBucketInput`<sup>Optional</sup> <a name="AccessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucketInput"></a>

```csharp
public string[] AccessToBucketInput { get; }
```

- *Type:* string[]

---

##### `AccessToAcl`<sup>Required</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAcl"></a>

```csharp
public string[] AccessToAcl { get; }
```

- *Type:* string[]

---

##### `AccessToBucket`<sup>Required</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucket"></a>

```csharp
public string[] AccessToBucket { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.internalValue"></a>

```csharp
public ObsBucketAclOwnerPermission InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

---


### ObsBucketAclPublicPermissionOutputReference <a name="ObsBucketAclPublicPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ObsBucketAclPublicPermissionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToAcl">ResetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToBucket">ResetAccessToBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToAcl` <a name="ResetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToAcl"></a>

```csharp
private void ResetAccessToAcl()
```

##### `ResetAccessToBucket` <a name="ResetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToBucket"></a>

```csharp
private void ResetAccessToBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAclInput">AccessToAclInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucketInput">AccessToBucketInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAcl">AccessToAcl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucket">AccessToBucket</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessToAclInput`<sup>Optional</sup> <a name="AccessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAclInput"></a>

```csharp
public string[] AccessToAclInput { get; }
```

- *Type:* string[]

---

##### `AccessToBucketInput`<sup>Optional</sup> <a name="AccessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucketInput"></a>

```csharp
public string[] AccessToBucketInput { get; }
```

- *Type:* string[]

---

##### `AccessToAcl`<sup>Required</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAcl"></a>

```csharp
public string[] AccessToAcl { get; }
```

- *Type:* string[]

---

##### `AccessToBucket`<sup>Required</sup> <a name="AccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucket"></a>

```csharp
public string[] AccessToBucket { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.internalValue"></a>

```csharp
public ObsBucketAclPublicPermission InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

---



