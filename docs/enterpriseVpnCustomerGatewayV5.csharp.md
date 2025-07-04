# `enterpriseVpnCustomerGatewayV5` Submodule <a name="`enterpriseVpnCustomerGatewayV5` Submodule" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseVpnCustomerGatewayV5 <a name="EnterpriseVpnCustomerGatewayV5" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5 opentelekomcloud_enterprise_vpn_customer_gateway_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new EnterpriseVpnCustomerGatewayV5(Construct Scope, string Id, EnterpriseVpnCustomerGatewayV5Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config">EnterpriseVpnCustomerGatewayV5Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config">EnterpriseVpnCustomerGatewayV5Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetAsn">ResetAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdType">ResetIdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdValue">ResetIdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAsn` <a name="ResetAsn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetAsn"></a>

```csharp
private void ResetAsn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdType` <a name="ResetIdType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdType"></a>

```csharp
private void ResetIdType()
```

##### `ResetIdValue` <a name="ResetIdValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdValue"></a>

```csharp
private void ResetIdValue()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseVpnCustomerGatewayV5 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

EnterpriseVpnCustomerGatewayV5.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

EnterpriseVpnCustomerGatewayV5.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

EnterpriseVpnCustomerGatewayV5.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

EnterpriseVpnCustomerGatewayV5.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EnterpriseVpnCustomerGatewayV5 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnterpriseVpnCustomerGatewayV5 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnterpriseVpnCustomerGatewayV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseVpnCustomerGatewayV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.routeMode">RouteMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asnInput">AsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idTypeInput">IdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValueInput">IdValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asn">Asn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idType">IdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValue">IdValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RouteMode`<sup>Required</sup> <a name="RouteMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.routeMode"></a>

```csharp
public string RouteMode { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asnInput"></a>

```csharp
public double AsnInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdTypeInput`<sup>Optional</sup> <a name="IdTypeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idTypeInput"></a>

```csharp
public string IdTypeInput { get; }
```

- *Type:* string

---

##### `IdValueInput`<sup>Optional</sup> <a name="IdValueInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValueInput"></a>

```csharp
public string IdValueInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asn"></a>

```csharp
public double Asn { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdType`<sup>Required</sup> <a name="IdType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idType"></a>

```csharp
public string IdType { get; }
```

- *Type:* string

---

##### `IdValue`<sup>Required</sup> <a name="IdValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValue"></a>

```csharp
public string IdValue { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseVpnCustomerGatewayV5Config <a name="EnterpriseVpnCustomerGatewayV5Config" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new EnterpriseVpnCustomerGatewayV5Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double Asn = null,
    string Id = null,
    string IdType = null,
    string IdValue = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#name EnterpriseVpnCustomerGatewayV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.asn">Asn</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#asn EnterpriseVpnCustomerGatewayV5#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#id EnterpriseVpnCustomerGatewayV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idType">IdType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#id_type EnterpriseVpnCustomerGatewayV5#id_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idValue">IdValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#id_value EnterpriseVpnCustomerGatewayV5#id_value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#tags EnterpriseVpnCustomerGatewayV5#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#name EnterpriseVpnCustomerGatewayV5#name}.

---

##### `Asn`<sup>Optional</sup> <a name="Asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.asn"></a>

```csharp
public double Asn { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#asn EnterpriseVpnCustomerGatewayV5#asn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#id EnterpriseVpnCustomerGatewayV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdType`<sup>Optional</sup> <a name="IdType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idType"></a>

```csharp
public string IdType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#id_type EnterpriseVpnCustomerGatewayV5#id_type}.

---

##### `IdValue`<sup>Optional</sup> <a name="IdValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idValue"></a>

```csharp
public string IdValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#id_value EnterpriseVpnCustomerGatewayV5#id_value}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/enterprise_vpn_customer_gateway_v5#tags EnterpriseVpnCustomerGatewayV5#tags}.

---



